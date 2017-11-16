import { Injectable } from '@angular/core';
import { Recipe } from '../../../shared/models/recipe.model';
import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from '../../../shared/models/ingredient.model';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { RecipesFeatureState } from '../../recipes/store/recipes.reducers';
import { AddRecipe, SetRecipes, DeleteRecipe, UpdateRecipe, SaveRecipes, LoadRecipes } from '../../recipes/store/recipes.actions';

@Injectable()
export class RecipesService {
	constructor (
		private slService: ShoppingListService,
		private store: Store<RecipesFeatureState>
	) {}

	getRecipes (): Observable<Array<Recipe>> {
		return this.store.select('recipes', 'recipes');
	}

	getRecipe (index: number): Observable<Recipe> {
		return this.store
			.select('recipes', 'recipes')
			.map((recipes: Array<Recipe>) => recipes.filter((recipe, idx) => index === idx)[0])
			.share();
	}

	addRecipe (recipe: Recipe) {
		this.store.dispatch(new AddRecipe(recipe));
	}

	setRecipes (recipes: Array<Recipe>) {
		this.store.dispatch(new SetRecipes(recipes));
	}

	deleteRecipe (index: number) {
		this.store.dispatch(new DeleteRecipe(index));
	}

	updateRecipe (index: number, recipe: Recipe) {
		this.store.dispatch(new UpdateRecipe({index, recipe}));
	}

	toShoppingList (ingredients: Array<Ingredient>) {
		this.slService.addItems(ingredients);
	}

	saveRecipes () {
		this.store.dispatch(new SaveRecipes());
	}

	loadRecipes () {
		this.store.dispatch(new LoadRecipes());
	}

}
