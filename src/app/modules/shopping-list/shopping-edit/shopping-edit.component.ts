import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../../shared/models/ingredient.model';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs/Subscription';
import { AppState } from '../../../app-store.module';
import { Store } from '@ngrx/store';
import { ShoppingListState } from '../store/shopping-list.reducers';

@Component({
	selector: 'app-shopping-edit',
	templateUrl: './shopping-edit.component.html',
	styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
	@ViewChild('f') form: NgForm;

	editMode: boolean;
	editedItem: Ingredient;

	private subscription: Subscription;

	constructor (
		private slService: ShoppingListService,
		private store: Store<AppState>
	) {}

	ngOnInit () {
		this.subscription = this.store.select('shoppingList')
			.subscribe((slState: ShoppingListState) => {
				if (slState.editedItemIndex > -1) {
					this.editMode = true;
					this.editedItem = slState.items[slState.editedItemIndex];
					this.form.setValue(this.editedItem);
				}
			});
	}

	ngOnDestroy () {
		this.subscription.unsubscribe();
		this.slService.stopEditingItem();
	}

	onAddNew (newItem: Ingredient) {
		this.slService.addItem(newItem);
		this.form.reset();
	}

	onUpdate (newItem: Ingredient) {
		this.slService.changeEditedItem(newItem);
		this.reset();
	}

	onDelete () {
		this.slService.deleteEditedItem();
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
