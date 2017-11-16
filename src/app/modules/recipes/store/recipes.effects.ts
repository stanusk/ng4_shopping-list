import { Actions, Effect } from '@ngrx/effects';
import { LOAD_RECIPES, SAVE_RECIPES, SET_RECIPES } from './recipes.actions';
import { Injectable } from '@angular/core';
import { RecipesService } from '../../core/services/recipes.service';
import { DatabaseService } from '../../core/services/database.service';
import { Recipe } from '../../../shared/models/recipe.model';

@Injectable()
export class RecipesEffects {
	constructor (
		private actions$: Actions,
		private recipesService: RecipesService,
		private databaseService: DatabaseService
	) {}

	@Effect({dispatch: false}) saveRecipes = this.actions$
		.ofType(SAVE_RECIPES)
		.do(console.log)
		.switchMap(_ => this.recipesService.getRecipes().first())
		.map(recipes => {
			// need to subscribe, otherwise the request is cold and gets ignored
			this.databaseService.save('recipes', recipes).first().subscribe();
		});

	@Effect() loadRecipes = this.actions$
		.ofType(LOAD_RECIPES)
		.switchMap(_ => this.databaseService.load('recipes').first())
		.map((recipes: Array<Recipe>) => recipes.map(r => {
			r.ingredients = r.ingredients || [];
			return r;
		}))
		.map(recipes => ({type: SET_RECIPES, payload: recipes}));
}
