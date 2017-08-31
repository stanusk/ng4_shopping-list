import { Component, OnInit } from '@angular/core';
import { Ingredient, newIngredient } from '../shared/models/ingredient.model';
import { NewItem } from './shopping-edit/shopping-edit.component';
import { ShoppingListService } from './shopping-list.service';

@Component({
	selector: 'app-shopping-list',
	templateUrl: './shopping-list.component.html',
	styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
	shoppingItems: Array<Ingredient> = [];

	itemToEdit: Ingredient;

	constructor (private slService: ShoppingListService) { }

	ngOnInit () {
		this.shoppingItems = this.slService.items;
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

}
