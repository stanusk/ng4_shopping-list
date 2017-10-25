import { Recipe } from '../../../shared/models/recipe.model';
import { AppState } from '../../../app-store.module';

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

export function recipesReducer (state: RecipesState = initialState, action) {
	switch (action.type) {
		default:
			return state;
	}
}
