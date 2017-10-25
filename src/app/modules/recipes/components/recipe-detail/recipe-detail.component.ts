import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../../shared/models/recipe.model';
import { RecipesService } from '../../../core/services/recipes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'app-recipe-detail',
	templateUrl: './recipe-detail.component.html',
	styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

	recipe$: Observable<Recipe>;
	recipeIndex$: Observable<number>;

	constructor (
		private recipeService: RecipesService,
		private router: Router,
		private route: ActivatedRoute
	) { }

	ngOnInit () {
		this.recipeIndex$ = this.route.params.map(params => +params['id']);
		this.recipe$ = this.recipeIndex$.switchMap(index => this.recipeService.getRecipe(index));
	}

	addToShoppingList () {
		this.recipe$.first().subscribe(recipe => this.recipeService.toShoppingList(recipe.ingredients));
	}

	deleteRecipe () {
		this.recipeIndex$.first().subscribe(index => this.recipeService.deleteRecipe(index));
		this.goBack();
	}

	goBack () {
		this.router.navigate(['../'], {relativeTo: this.route});
	}
}
