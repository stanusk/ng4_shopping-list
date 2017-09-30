import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../../shared/models/recipe.model';
import { RecipesService } from './recipes.service';
import { Subscription } from 'rxjs/Subscription';

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
				<router-outlet></router-outlet>
			</div>
		</div>
	`
})
export class RecipesComponent implements OnInit, OnDestroy {
	recipes: Array<Recipe> = [];
	s: Subscription;

	constructor (private recipesService: RecipesService) { }

	ngOnInit () {
		this.loadRecipes();
		this.s = this.recipesService.recipesChange.subscribe((recipes: Array<Recipe>) => { this.recipes = recipes; });
	}

	ngOnDestroy () {
		this.s.unsubscribe();
	}

	loadRecipes () {
		this.recipes = this.recipesService.getRecipes();
	}
}
