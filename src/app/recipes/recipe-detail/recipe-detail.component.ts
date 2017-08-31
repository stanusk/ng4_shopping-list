import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../shared/models/recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
	selector: 'app-recipe-detail',
	templateUrl: './recipe-detail.component.html',
	styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
	recipe: Recipe;

	constructor (private recipeService: RecipesService) { }

	ngOnInit () {
		this.recipeService.recipeSelected.subscribe((r: Recipe) => this.recipe = r);
	}

}
