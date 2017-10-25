import { Injectable } from '@angular/core';
import { Recipe } from '../../../shared/models/recipe.model';
import * as _ from 'lodash';
import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from '../../../shared/models/ingredient.model';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { DatabaseService } from './database.service';
import { Store } from '@ngrx/store';
import { RecipesFeatureState } from '../../recipes/store/recipes.reducers';

@Injectable()
export class RecipesService {
	recipesChange = new Subject();

	private recipes: Array<Recipe> = [];

	constructor (
		private slService: ShoppingListService,
		private firebaseService: DatabaseService,
		private store: Store<RecipesFeatureState>
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

	getRecipes (): Observable<Array<Recipe>> {
		return this.store.select('recipes', 'recipes');
	}

	toShoppingList (ingredients: Array<Ingredient>) {
		this.slService.addItems(ingredients);
	}

	saveRecipes (): Observable<Object> {
		const response$ = this.firebaseService
			.save('recipes', this.recipes)
			.share();

		response$.subscribe();

		return response$;
	}

	loadRecipes () {
		const recipes$ = this.firebaseService
			.load('recipes')
			.map((recipes: Array<Recipe>) => recipes.map(r => {
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

}
