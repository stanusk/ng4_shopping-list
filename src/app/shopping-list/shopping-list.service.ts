import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';
import { DatabaseService } from '../shared/database.service';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import { Store } from '@ngrx/store';
import { AppState } from '../app-store.module';
import * as ShoppingListActions from './store/shopping-list.actions';

@Injectable()
export class ShoppingListService {

	constructor (
		private firebaseService: DatabaseService,
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

	saveItems (): Observable<Response> {
		const response$ = this.getItems()
			.first()
			.switchMap(items => this.firebaseService.save('shoppingList', items))
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

		items$
			.do((items: Array<Ingredient>) => this.addItems(items))
			.subscribe();

		return items$;
	}
}
