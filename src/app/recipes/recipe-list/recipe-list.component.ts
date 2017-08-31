import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../shared/models/recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
	@Input() recipes: Array<Recipe>;

	constructor (private recipeService: RecipesService) {}

	onSelect (recipe: Recipe) {
		this.recipeService.recipeSelected.emit(recipe);
	}
}
