import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';
import * as _ from 'lodash';
import { Subject } from 'rxjs/Subject';
import { FirebaseService } from '../shared/firebase.service';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';

@Injectable()
export class ShoppingListService {
	private items: Array<Ingredient> = [];

	public itemsChange = new Subject<Array<Ingredient>>();
	public editingItem = new Subject<number>();

	constructor (
		private firebaseService: FirebaseService
	) {}

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

	saveItems (): Observable<Response> {
		const response$ = this.firebaseService
			.save('shoppingList', this.items)
			.share();

		response$.subscribe();

		return response$;
	}

	loadItems () {
		const items$ = this.firebaseService
			.load('shoppingList')
			.map(response => response.json())
			.share()
		;

		items$.subscribe(
			(items: Array<Ingredient>) => {
				this.items = items;
				this.emitChange();
			}
		);

		return items$;
	}

	MOCK_makeItems (): Array<Ingredient> {
		return [
			{name: 'muka', quantity: 200},
			{name: 'vajce', quantity: 2},
			{name: 'sol', quantity: 1}
		];
	}

}
