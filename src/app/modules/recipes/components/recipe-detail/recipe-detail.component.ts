import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../../shared/models/recipe.model';
import { RecipesService } from '../../../core/services/recipes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-recipe-detail',
	templateUrl: './recipe-detail.component.html',
	styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
	recipe: Recipe;
	recipeIndex: number;

	constructor (
		private recipeService: RecipesService,
		private router: Router,
		private route: ActivatedRoute
	) { }

	ngOnInit () {
		this.route.params.subscribe(params => {
			this.recipeIndex = +params['id'];
			this.recipe = this.recipeService.getRecipe(this.recipeIndex);
		});
	}

	addToShoppingList () {
		this.recipeService.toShoppingList(this.recipe.ingredients);
	}

	deleteRecipe (index: number) {
		this.recipeService.deleteRecipe(index);
		this.goBack();
	}

	goBack () {
		this.router.navigate(['../'], {relativeTo: this.route});
	}
}
