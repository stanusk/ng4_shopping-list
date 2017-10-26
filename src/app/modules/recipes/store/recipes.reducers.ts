import * as _ from 'lodash';

import { Recipe } from '../../../shared/models/recipe.model';
import { AppState } from '../../../app-store.module';
import { ADD_RECIPE, SET_RECIPES, DELETE_RECIPE, RecipesActions, UPDATE_RECIPE } from './recipes.actions';

export interface RecipesFeatureState extends AppState {
	recipes: RecipesState;
}

export interface RecipesState {
	recipes: Array<Recipe>;
}

const MOCK_initialRecipes = [
	{
		name: 'gule',
		description: 'gule na vode',
		ingredients: [{name: 'varlata', quantity: 2}],
		imagePath: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Curry_Fish_Balls.jpg'
	},
	{
		name: 'vajcia',
		description: 'ehm',
		ingredients: [{name: 'bykove varlata', quantity: 6}],
		imagePath: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Criadillas_de_Choto-_Madrid.jpg'
	}
];

const initialState = {
	recipes: MOCK_initialRecipes
};

export function recipesReducer (state: RecipesState = initialState, action: RecipesActions) {
	switch (action.type) {
		case ADD_RECIPE:
			return addRecipe(state, action.payload);

		case SET_RECIPES:
			return {
				...state,
				recipes: _.cloneDeep(action.payload)
			};

		case DELETE_RECIPE:
			return {
				...state,
				recipes: state.recipes.filter((r, index) => index !== action.payload)
			};

		case UPDATE_RECIPE:
			return updateRecipe(state, action.payload);

		default:
			return state;
	}
}

function addRecipe (state: RecipesState, newRecipe: Recipe): RecipesState {
	const recipes = _.cloneDeep(state.recipes);

	return {
		...state,
		recipes: recipes.concat(newRecipe)
	};
}

function updateRecipe (state: RecipesState, {index, recipe}): RecipesState {
	const recipes = _.cloneDeep(state.recipes);
	recipes[index] = _.cloneDeep(recipe);

	return {
		...state,
		recipes
	};
}
