import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { NoRecipeSelectedComponent } from './components/no-recipe-selected/no-recipe-selected.component';
import { RecipeEditComponent } from './components/recipe-edit/recipe-edit.component';
import { AuthGuard } from './services/auth-guard.service';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';

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
	providers: [
		AuthGuard
	],
	imports: [
		RouterModule.forChild(recipesRoutes)
	],
	exports: [
		RouterModule
	]
})
export class RecipesRoutesModule {}
