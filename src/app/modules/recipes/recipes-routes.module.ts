import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { NoRecipeSelectedComponent } from './no-recipe-selected/no-recipe-selected.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { AuthGuard } from '../auth/services/auth-guard.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

const recipesRoutes: Routes = [
	{
		path: 'recipes',
		component: RecipesComponent,
		children: [
			{ path: '', component: NoRecipeSelectedComponent, pathMatch: 'full' },
			{ path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
			{ path: ':id', component: RecipeDetailComponent },
			{ path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] }
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(recipesRoutes)
	],
	exports: [
		RouterModule
	]
})
export class RecipesRoutesModule {}
