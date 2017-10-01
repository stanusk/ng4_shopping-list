
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/core/components/home/home.component';

const appRoutes: Routes = [
	{ path: '', pathMatch: 'full', component: HomeComponent },
	{ path: 'recipes', loadChildren: './modules/recipes/recipes.module#RecipesModule' },
	{ path: 'shopping-list', loadChildren: './modules/shopping-list/shopping-list.module#ShoppingListModule' },
	{ path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule' }
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {}
