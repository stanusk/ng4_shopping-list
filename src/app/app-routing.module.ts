
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { NoRecipeSelectedComponent } from './recipes/no-recipe-selected/no-recipe-selected.component';
import { SandboxComponent } from './x_sandbox/sandbox.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';

const routing: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: '/shopping-list' },
	{ path: 'shopping-list', component: ShoppingListComponent },
	{
		path: 'recipes',
		component: RecipesComponent,
		children: [
			{ path: '', component: NoRecipeSelectedComponent, pathMatch: 'full' },
			{ path: 'new', component: RecipeEditComponent },
			{ path: ':id', component: RecipeDetailComponent },
			{ path: ':id/edit', component: RecipeEditComponent }
		]
	},
	{ path: 'sandbox', component: SandboxComponent },
	{ path: 'signin', component: SigninComponent },
	{ path: 'signup', component: SignupComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(routing)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {}