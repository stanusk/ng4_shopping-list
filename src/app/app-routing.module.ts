
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/core/components/home/home.component';

const appRoutes: Routes = [
	{ path: '', pathMatch: 'full', component: HomeComponent },
	{ path: 'recipes', loadChildren: './modules/recipes/recipes.module#RecipesModule' }
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {}
