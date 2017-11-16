
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ADD_ITEMS, LOAD_ITEMS, SAVE_ITEMS } from './shopping-list.actions';
import { ShoppingListService } from '../../core/services/shopping-list.service';
import { DatabaseService } from '../../core/services/database.service';

@Injectable()
export class ShoppingListEffects {
	constructor (
		private actions$: Actions,
		private shoppingListService: ShoppingListService,
		private databaseService: DatabaseService
	) {}

	@Effect({dispatch: false}) saveItems = this.actions$
		.ofType(SAVE_ITEMS)
		.switchMap(_ => this.shoppingListService.getItems().first())
		.map(items => {
			// need to subscribe, otherwise the request is cold and gets ignored
			this.databaseService.save('shoppingList', items).first().subscribe();
		});

	@Effect() loadItems = this.actions$
		.ofType(LOAD_ITEMS)
		.switchMap(_ => this.databaseService.load('shoppingList').first())
		.map(items => ({type: ADD_ITEMS, payload: items}));
}
