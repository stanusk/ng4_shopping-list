import { Injectable } from '@angular/core';
import { Ingredient } from '../../../shared/models/ingredient.model';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app-store.module';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';

@Injectable()
export class ShoppingListService {

	constructor (
		private store: Store<AppState>
	) {}

	getItems (): Observable<Array<Ingredient>> {
		return this.store.select('shoppingList', 'items');
	}

	addItems (ingredients: Array<Ingredient>) {
		this.store.next(new ShoppingListActions.AddItems(ingredients));
	}

	addItem (ingredient: Ingredient) {
		this.store.next(new ShoppingListActions.AddItem(ingredient));
	}

	startEditingItem (itemIndex: number) {
		this.store.next(new ShoppingListActions.SetEditedItem(itemIndex));
	}

	stopEditingItem () {
		this.store.next(new ShoppingListActions.SetEditedItem(-1));
	}

	changeEditedItem (ingredient: Ingredient) {
		this.store.next(new ShoppingListActions.ChangeEditedItem(ingredient));
	}

	deleteEditedItem () {
		this.store.next(new ShoppingListActions.DeleteEditedItem());
	}

	saveItems () {
		this.store.dispatch(new ShoppingListActions.SaveItems());
	}

	loadItems () {
		this.store.dispatch(new ShoppingListActions.LoadItems());
	}
}
