import { Ingredient } from '../../../shared/models/ingredient.model';
import { Action } from '@ngrx/store';

export const ADD_ITEM = 'ADD_ITEM';
export const ADD_ITEMS = 'ADD_ITEMS';
export const SET_EDITED_ITEM = 'SET_EDITED_ITEM';
export const CHANGE_EDITED_ITEM = 'CHANGE_EDITED_ITEM';
export const DELETE_EDITED_ITEM = 'DELETE_EDITED_ITEM';

export const SAVE_ITEMS = 'SAVE_ITEMS';
export const LOAD_ITEMS = 'LOAD_ITEMS';

export class AddItem implements Action {
	readonly type = ADD_ITEM;
	constructor (public payload: Ingredient) {}
}

export class AddItems implements Action {
	readonly type = ADD_ITEMS;
	constructor (public payload: Array<Ingredient>) {}
}

export class SetEditedItem implements Action {
	readonly type = SET_EDITED_ITEM;
	constructor (public payload: number) {}
}

export class ChangeEditedItem implements Action {
	readonly type = CHANGE_EDITED_ITEM;
	constructor (public payload: Ingredient) {}
}

export class DeleteEditedItem implements Action {
	readonly type = DELETE_EDITED_ITEM;
}

export class SaveItems implements Action {
	readonly type = SAVE_ITEMS;
}

export class LoadItems implements Action {
	readonly type = LOAD_ITEMS;
}

export type ShoppingListActions = AddItem
	| AddItems
	| ChangeEditedItem
	| SetEditedItem
	| DeleteEditedItem
	| SaveItems
	| LoadItems
	;
