import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/models/ingredient.model';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'app-shopping-edit',
	templateUrl: './shopping-edit.component.html',
	styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
	@ViewChild('f') form: NgForm;

	public editMode = false;
	public editedItem: Ingredient;
	public editedItemIndex

	private subscription: Subscription;

	constructor (private slService: ShoppingListService) {}

	ngOnInit () {
		this.subscription = this.slService.editingItem
			.subscribe(index => {
				this.editMode = true;
				this.editedItemIndex = index;
				this.editedItem = this.slService.getItem(index);
				this.form.setValue({
					name: this.editedItem.name,
					quantity: this.editedItem.quantity
				});
			});
	}

	ngOnDestroy () {
		this.subscription.unsubscribe();
	}

	onAddNew (newItem: Ingredient) {
		this.slService.addNewItem(newItem);
		this.reset();
	}

	onUpdate (index: number, newItem: Ingredient) {
		this.slService.changeItem(index, newItem);
		this.reset();
	}

	onDelete (index: number) {
		this.slService.deleteItem(index);
		this.reset();
	}

	reset () {
		this.form.reset();
		this.editMode = false;
	}

	areEqual (formItem, editedItem): boolean {
		return formItem.name === editedItem.name && formItem.quantity === editedItem.quantity;
	}

}
