import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes.service';

@Component({
	selector: 'app-recipe-edit',
	templateUrl: './recipe-edit.component.html',
	styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {

	constructor (
		private route: ActivatedRoute,
		private recipesService: RecipesService
	) { }

	ngOnInit () {
		const editedRecipe = this.recipesService.getRecipe(+this.route.snapshot.params['id']);
		console.log(editedRecipe);
	}

}
