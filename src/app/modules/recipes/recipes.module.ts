import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes.component';
import { RecipeListItemComponent } from './recipe-list/recipe-list-item/recipe-list-item.component';
import { NoRecipeSelectedComponent } from './no-recipe-selected/no-recipe-selected.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesService } from './recipes.service';

import { SharedModule } from '../shared/shared.module';
import { RecipesRoutesModule } from './recipes-routes.module';

@NgModule({
	declarations: [
		RecipeListComponent,
		RecipeDetailComponent,
		RecipesComponent,
		RecipeListItemComponent,
		RecipeEditComponent,
		NoRecipeSelectedComponent
	],
	imports: [
		SharedModule,
		RecipesRoutesModule,

		ReactiveFormsModule
	],
	exports: [],
	providers: [
		RecipesService
	]
})
export class RecipesModule {}
