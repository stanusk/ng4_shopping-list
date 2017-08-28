import { Component, OnInit } from '@angular/core';
import {newRecipe, Recipe} from '../shared-models/recipe.model';

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

  constructor() { }

  ngOnInit() {
    this.recipes = this.getRecipes();
  }

  getRecipes (): Array<Recipe> {
    const mock = this.MOCK_getRecipe();
    return [mock];
  }

  onRecipeSelected (recipe: Recipe) {
    this.selectedRecipe = recipe;
  }

  private MOCK_getRecipe (): Recipe {
    return newRecipe({
      name: 'gule',
      description: 'gule na vode',
      ingredients: [{name: 'varlata', quantity: 2}],
      imagePath: 'https://upload.wikimedia.org/wikipedia/commons/4/47/A_mix_of_veggies_and_fried_balls%21%21.JPG'
    });
  }
}
