import * as ShoppingListActions from './shopping-list.actions';
import { Ingredient } from '../../../shared/models/ingredient.model';
import * as _ from 'lodash';

export interface ShoppingListState {
	items: Array<Ingredient>;
	editedItemIndex: number;
}

const MOCK_initialItems: Array<Ingredient> = [
	{name: 'muka', quantity: 200},
	{name: 'vajco', quantity: 2},
	{name: 'sol', quantity: 1}
];

const initialState = {
	items: [],
	editedItemIndex: -1
};

export function shoppingListReducer (
	state: ShoppingListState = initialState,
	action: ShoppingListActions.ShoppingListActions): ShoppingListState {

	switch (action.type) {
		case ShoppingListActions.ADD_ITEM:
			return {
				...state,
				items: [...state.items, action.payload]
			};

		case ShoppingListActions.ADD_ITEMS:
			return {
				...state,
				items: [...state.items, ...action.payload]
			};

		case ShoppingListActions.CHANGE_EDITED_ITEM:
			return editIngredient(state, action.payload);

		case ShoppingListActions.SET_EDITED_ITEM:
			return {
				...state,
				editedItemIndex: action.payload
			};

		case ShoppingListActions.DELETE_EDITED_ITEM:
			return deleteEditedIngredient(state);

		default:
			return state;
	}
}

function editIngredient (state: ShoppingListState, changedIngredient: Ingredient): ShoppingListState {
	const newIngredients = _.cloneDeep(state.items);
	newIngredients[state.editedItemIndex] = changedIngredient;

	return {
		...state,
		items: newIngredients,
		editedItemIndex: -1
	};
}

function deleteEditedIngredient (state: ShoppingListState): ShoppingListState {
	const newIngredients = _.cloneDeep(state.items);
	newIngredients.splice(state.editedItemIndex, 1);

	return {
		...state,
		items: newIngredients,
		editedItemIndex: -1
	};
}
