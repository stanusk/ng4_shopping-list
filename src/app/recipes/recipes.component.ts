import { Component, OnInit } from '@angular/core';
import { newRecipe, Recipe } from '../shared/models/recipe.model';
import { RecipesService } from './recipes.service';

@Component({
	selector: 'app-recipes',
	template: `
		<div class="row">
			<div class="col col-xs-5">
				<app-recipe-list
					[recipes]="recipes"
				></app-recipe-list>
			</div>
			<div class="col col-xs-7">
				<app-recipe-detail></app-recipe-detail>
			</div>
		</div>
	`
})
export class RecipesComponent implements OnInit {
	recipes: Array<Recipe> = [];

	constructor (private recipesService: RecipesService) { }

	ngOnInit () {
		this.recipes = this.recipesService.getRecipes();
	}
}
