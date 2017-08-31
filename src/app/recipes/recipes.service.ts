import { EventEmitter, Injectable } from '@angular/core';
import { newRecipe, Recipe } from '../shared/models/recipe.model';
import * as _ from 'lodash';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Ingredient } from '../shared/models/ingredient.model';

@Injectable()
export class RecipesService {
	private recipes: Array<Recipe> = [];

	public recipeSelected = new EventEmitter<Recipe>();

	constructor (private shService: ShoppingListService) {
		this.recipes = this.MOCK_getRecipes();
	}

	getRecipes (): Array<Recipe> {
		return _.cloneDeep(this.recipes);
	}

	toShoppingList (ingredients: Array<Ingredient>) {
		this.shService.addIngredients(ingredients);
	}

	private MOCK_getRecipes (): Array<Recipe> {
		return [
			newRecipe({
				name: 'gule',
				description: 'gule na vode',
				ingredients: [{name: 'varlata', quantity: 2}],
				imagePath: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Curry_Fish_Balls.jpg'
			}),
			newRecipe({
				name: 'vajcia',
				description: 'ehm',
				ingredients: [{name: 'bykove varlata', quantity: 6}],
				imagePath: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Criadillas_de_Choto-_Madrid.jpg'
			})
		];
	}

}
