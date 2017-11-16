import { Recipe } from '../../../shared/models/recipe.model';

export const ADD_RECIPE = 'ADD_RECIPE';
export const SET_RECIPES = 'SET_RECIPES';
export const DELETE_RECIPE = 'DELETE_RECIPE';
export const UPDATE_RECIPE = 'UPDATE_RECIPE';

export const SAVE_RECIPES = 'SAVE_RECIPES';
export const LOAD_RECIPES = 'LOAD_RECIPES';

export class AddRecipe {
	readonly type = ADD_RECIPE;
	constructor (public payload: Recipe) {}
}

export class SetRecipes {
	readonly type = SET_RECIPES;
	constructor (public payload: Array<Recipe>) {}
}

export class DeleteRecipe {
	readonly type = DELETE_RECIPE;
	constructor (public payload: number) {}
}

export class UpdateRecipe {
	readonly type = UPDATE_RECIPE;
	constructor (public payload: {index: number, recipe: Recipe}) {}
}

export class SaveRecipes {
	readonly type = SAVE_RECIPES;
}

export class LoadRecipes {
	readonly type = LOAD_RECIPES;
}

export type RecipesActions = AddRecipe
	| SetRecipes
	| DeleteRecipe
	| UpdateRecipe
	| SaveRecipes
	| LoadRecipes
	;
