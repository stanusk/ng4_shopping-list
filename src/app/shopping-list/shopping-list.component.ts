import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';
import { NewItem } from './shopping-edit/shopping-edit.component';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'app-shopping-list',
	templateUrl: './shopping-list.component.html',
	styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
	private subs: Array<Subscription>;
	shoppingItems: Array<Ingredient> = [];

	itemToEdit: Ingredient;

	constructor (private slService: ShoppingListService) { }

	ngOnInit () {
		this.shoppingItems = this.slService.getItems();

		this.subs = [
			this.slService.itemsChange
				.subscribe(items => this.shoppingItems = items)
		];
	}

	editItem (item: Ingredient) {
		this.itemToEdit = item;
	}

	onAddNewItem (itemData: NewItem) {
		this.slService.addNewItem(itemData);
	}

	onChangeItem (newItem: Ingredient) {
		this.slService.changeItem(newItem);

		this.itemToEdit = null;
	}

	onDeleteItem (id: number) {
		this.slService.deleteItem(id);

		this.itemToEdit = null;
	}

	ngOnDestroy () {
		this.subs.forEach(s => s.unsubscribe());
	}
}
