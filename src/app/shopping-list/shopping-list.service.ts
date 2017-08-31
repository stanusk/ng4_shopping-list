import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient, newIngredient } from '../shared/models/ingredient.model';
import { NewItem } from './shopping-edit/shopping-edit.component';
import * as _ from 'lodash';

@Injectable()
export class ShoppingListService {
	private items: Array<Ingredient> = [];

	public itemsChange = new EventEmitter<Array<Ingredient>>();

	constructor () {
		this.items = this.MOCK_makeItems();
	}

	getItems (): Array<Ingredient> {
		return _.cloneDeep(this.items);
	}

	emitChange () {
		this.itemsChange.emit(_.cloneDeep(this.items));
	}

	addNewItem (itemDataObj: NewItem) {
		this.items.push(newIngredient(itemDataObj));
		this.emitChange();
	}

	changeItem (newItem: Ingredient) {
		const oldItemPos = this.items.findIndex(i => i.id === newItem.id);

		this.items[oldItemPos] = newItem;
		this.emitChange();
	}

	deleteItem (id: number) {
		this.items = this.items.filter(i => i.id !== id);
		this.emitChange();
	}

	MOCK_makeItems (): Array<Ingredient> {
		return [
			newIngredient({name: 'muka', quantity: 200}),
			newIngredient({name: 'vajce', quantity: 2}),
			newIngredient({name: 'sol', quantity: 1})
		];
	}

}
