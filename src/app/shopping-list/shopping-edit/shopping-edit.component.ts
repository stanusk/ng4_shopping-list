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

	private subscription: Subscription;

	constructor (private slService: ShoppingListService) {}

	ngOnInit () {
		this.subscription = this.slService.editingItem
			.subscribe(itemId => {
				this.editMode = true;
				this.editedItem = this.slService.getItem(itemId);
				this.form.setValue({
					name: this.editedItem.name,
					quantity: this.editedItem.quantity
				});
			});
	}

	ngOnDestroy () {
		this.subscription.unsubscribe();
	}

	onAddNew (newItem: NewItem) {
		this.slService.addNewItem(newItem);
		this.reset();
	}

	onUpdate (newItem: NewItem) {
		this.slService.changeItem(this.editedItem.id, newItem);
		this.reset();
	}

	onDelete (id) {
		this.slService.deleteItem(id);
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

export interface NewItem {
	name: string;
	quantity: number;
}
