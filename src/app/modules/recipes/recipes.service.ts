import { Injectable } from '@angular/core';
import { Recipe } from '../../shared/models/recipe.model';
import * as _ from 'lodash';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { Ingredient } from '../../shared/models/ingredient.model';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { DatabaseService } from '../../shared/database.service';
import { Response } from '@angular/http';

@Injectable()
export class RecipesService {
	recipesChange = new Subject();

	private recipes: Array<Recipe> = [];

	constructor (
		private slService: ShoppingListService,
		private firebaseService: DatabaseService
	) {}

	addRecipe (recipe: Recipe) {
		this.recipes.push(recipe);
		this.emitRecipeChange();
	}

	updateRecipe (index: number, recipe: Recipe) {
		this.recipes[index] = recipe;
		this.emitRecipeChange();
	}

	deleteRecipe (index: number) {
		this.recipes.splice(index, 1);
		this.emitRecipeChange();
	}

	getRecipe (index: number): Recipe {
		return _.cloneDeep(this.recipes[index]);
	}

	getRecipes (): Array<Recipe> {
		return _.cloneDeep(this.recipes);
	}

	toShoppingList (ingredients: Array<Ingredient>) {
		this.slService.addItems(ingredients);
	}

	saveRecipes (): Observable<Response> {
		const response$ = this.firebaseService
			.save('recipes', this.recipes)
			.share();

		response$.subscribe();

		return response$;
	}

	loadRecipes () {
		const recipes$ = this.firebaseService
			.load('recipes')
			.map(response => response.json())
			.map(recipes => recipes.map(r => {
				r.ingredients = r.ingredients || [];
				return r;
			}))
			.share()
		;

		recipes$.subscribe(
			(recipes: Array<Recipe>) => {
				this.recipes = recipes;
				this.emitRecipeChange();
			}
		);

		return recipes$;
	}

	private emitRecipeChange () {
		this.recipesChange.next(_.cloneDeep(this.recipes));
	}

	private MOCK_getRecipes (): Array<Recipe> {
		return [
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
	}

}
