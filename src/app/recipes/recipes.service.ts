import { Injectable } from '@angular/core';
import { newRecipe, NewRecipeProps, Recipe } from '../shared/models/recipe.model';
import * as _ from 'lodash';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Ingredient } from '../shared/models/ingredient.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipesService {
	recipesChange = new Subject();

	private recipes: Array<Recipe> = [];

	constructor (private shService: ShoppingListService) {
		this.recipes = this.MOCK_getRecipes();
	}

	addRecipe (recipeData: NewRecipeProps) {
		this.recipes.push(newRecipe(recipeData));
		this.recipesChange.next(_.cloneDeep(this.recipes));
	}

	updateRecipe (id, recipeData) {
		const recipePosition = this.recipes.findIndex(r => r.id === id);
		this.recipes[recipePosition] = newRecipe(recipeData);
		this.recipesChange.next(_.cloneDeep(this.recipes));
	}

	deleteRecipe (id: number) {
		this.recipes = this.recipes.filter(r => r.id !== id);
		this.recipesChange.next(_.cloneDeep(this.recipes));
	}

	getRecipe (id: number): Recipe {
		const recipe = this.recipes.find(r => r.id === id);
		return _.cloneDeep(recipe);
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
