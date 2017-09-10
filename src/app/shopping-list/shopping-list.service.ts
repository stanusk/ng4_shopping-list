import { Injectable } from '@angular/core';
import { Ingredient, newIngredient } from '../shared/models/ingredient.model';
import { NewItem } from './shopping-edit/shopping-edit.component';
import * as _ from 'lodash';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ShoppingListService {
	private items: Array<Ingredient> = [];

	public itemsChange = new Subject<Array<Ingredient>>();
	public editingItem = new Subject<number>();

	constructor () {
		this.items = this.MOCK_makeItems();
	}

	getItems (): Array<Ingredient> {
		return _.cloneDeep(this.items);
	}

	getItem (id: number): Ingredient {
		return this.items.find(i => i.id === id);
	}

	emitChange () {
		this.itemsChange.next(_.cloneDeep(this.items));
	}

	addIngredients (ingredients: Array<Ingredient>) {
		this.items.push(...ingredients);
		this.emitChange();
	}

	addNewItem (itemDataObj: NewItem) {
		this.items.push(newIngredient(itemDataObj));
		this.emitChange();
	}

	changeItem (itemId: number, newItem: NewItem) {
		const oldItemPos = this.items.findIndex(i => i.id === itemId);

		this.items[oldItemPos] = newIngredient(newItem);
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
