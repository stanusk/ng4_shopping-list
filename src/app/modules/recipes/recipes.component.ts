import { Component } from '@angular/core';
import { Recipe } from '../../shared/models/recipe.model';
import { RecipesService } from '../core/services/recipes.service';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'app-recipes',
	template: `
		<div class="row">
			<div class="col col-xs-5">
				<app-recipe-list
					[recipes]="recipes$ | async"
				></app-recipe-list>
			</div>
			<div class="col col-xs-7">
				<router-outlet></router-outlet>
			</div>
		</div>
	`
})
export class RecipesComponent {
	recipes$: Observable<Array<Recipe>>;

	constructor (private recipesService: RecipesService) {
		this.recipes$ = this.recipesService.getRecipes();
	}
}
