import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';
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

	getItem (index: number): Ingredient {
		return _.cloneDeep(this.items[index]);
	}

	emitChange () {
		this.itemsChange.next(_.cloneDeep(this.items));
	}

	addIngredients (ingredients: Array<Ingredient>) {
		this.items.push(...ingredients);
		this.emitChange();
	}

	addNewItem (ingredient: Ingredient) {
		this.items.push(ingredient);
		this.emitChange();
	}

	changeItem (index: number, ingredient: Ingredient) {
		this.items[index] = ingredient;
		this.emitChange();
	}

	deleteItem (index: number) {
		this.items.splice(index, 1);
		this.emitChange();
	}

	MOCK_makeItems (): Array<Ingredient> {
		return [
			{name: 'muka', quantity: 200},
			{name: 'vajce', quantity: 2},
			{name: 'sol', quantity: 1}
		];
	}

}
