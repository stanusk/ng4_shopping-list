import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes.component';
import { RecipeListItemComponent } from './components/recipe-list/recipe-list-item/recipe-list-item.component';
import { NoRecipeSelectedComponent } from './components/no-recipe-selected/no-recipe-selected.component';
import { RecipeEditComponent } from './components/recipe-edit/recipe-edit.component';

import { SharedModule } from '../shared/shared.module';
import { RecipesRoutesModule } from './recipes-routes.module';

import { recipesReducer } from './store/recipes.reducers';
import { RecipesEffects } from './store/recipes.effects';

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

		ReactiveFormsModule,
		StoreModule.forFeature('recipes', recipesReducer),
		EffectsModule.forFeature([RecipesEffects])
	],
	exports: []
})
export class RecipesModule {}
