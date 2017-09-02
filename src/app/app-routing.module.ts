
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const routing: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: '/shopping-list' },
	{ path: 'shopping-list', component: ShoppingListComponent },
	{
		path: 'recipes',
		component: RecipesComponent,
		children: [
			{ path: ':id', component: RecipeDetailComponent },
			{ path: ':id/edit', component: RecipeEditComponent }
		]
	},
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