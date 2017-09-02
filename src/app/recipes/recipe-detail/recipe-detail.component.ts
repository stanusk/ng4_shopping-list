import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../shared/models/recipe.model';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-recipe-detail',
	templateUrl: './recipe-detail.component.html',
	styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
	recipe: Recipe;

	constructor (
		private recipeService: RecipesService,
		private route: ActivatedRoute
	) { }

	ngOnInit () {
		this.route.params.subscribe(params => {
			this.recipe = this.recipeService.getRecipe(+params['id']);
		});
	}

	addToShoppingList () {
		this.recipeService.toShoppingList(this.recipe.ingredients);
	}
}
