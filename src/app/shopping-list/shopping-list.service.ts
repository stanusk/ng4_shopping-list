import { Injectable } from '@angular/core';
import { Ingredient, newIngredient } from '../shared/models/ingredient.model';
import { NewItem } from './shopping-edit/shopping-edit.component';

@Injectable()
export class ShoppingListService {
	items: Array<Ingredient> = [];

	constructor () {
		this.items = this.MOCK_makeItems();
	}

	addNewItem (itemDataObj: NewItem) {
		this.items.push(newIngredient(itemDataObj));
	}

	changeItem (newItem: Ingredient) {
		const oldItemPos = this.items.findIndex(i => i.id === newItem.id);
		this.items[oldItemPos] = newItem;
	}

	deleteItem (id: number) {
		const deleted = this.items.findIndex(i => i.id === id);
		this.items.splice(deleted, 1);
	}

	MOCK_makeItems (): Array<Ingredient> {
		return [
			newIngredient({name: 'muka', quantity: 200}),
			newIngredient({name: 'vajce', quantity: 2}),
			newIngredient({name: 'sol', quantity: 1})
		];
	}

}
