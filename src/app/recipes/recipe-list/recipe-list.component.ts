import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../shared/models/recipe.model';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
	@Input() recipes: Array<Recipe>;
	@Output() recipeSelected = new EventEmitter<Recipe>();

	constructor () {
	}

	ngOnInit () {
	}

	onSelect (recipe: Recipe) {
		this.recipeSelected.emit(recipe);
	}
}
