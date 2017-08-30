import { Component, OnInit } from '@angular/core';
import { newRecipe, Recipe } from '../shared/models/recipe.model';

@Component({
	selector: 'app-recipes',
	template: `
		<div class="row">
			<div class="col col-xs-5">
				<app-recipe-list
					[recipes]="recipes"
					(recipeSelected)="onRecipeSelected($event)"
				></app-recipe-list>
			</div>
			<div class="col col-xs-7">
				<app-recipe-detail
					[recipe]="selectedRecipe"
				></app-recipe-detail>
			</div>
		</div>
	`
})
export class RecipesComponent implements OnInit {

	recipes: Array<Recipe> = [];
	selectedRecipe: Recipe;

	constructor () { }

	ngOnInit () {
		this.recipes = this.getRecipes();
	}

	getRecipes (): Array<Recipe> {
		return this.MOCK_getRecipes();
	}

	onRecipeSelected (recipe: Recipe) {
		this.selectedRecipe = recipe;
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
