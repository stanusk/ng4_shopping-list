import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './x_sandbox/servers/server/server.component';
import { ServersComponent } from './x_sandbox/servers/servers.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListItemComponent } from './recipes/recipe-list/recipe-list-item/recipe-list-item.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { HoverBorderDirective } from './x_sandbox/directives/hoverBorder.directive';
import { UnlessDirective } from './x_sandbox/directives/unless.directive';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipesService } from './recipes/recipes.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { NoRecipeSelectedComponent } from './recipes/no-recipe-selected/no-recipe-selected.component';
import { SandboxComponent } from './x_sandbox/sandbox.component';
import { ObservablesHomeComponent } from './x_sandbox/observables-home/observables-home.component';
import { FirebaseService } from './shared/firebase.service';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		ShoppingListComponent,
		RecipeListComponent,
		RecipeDetailComponent,
		RecipesComponent,
		RecipeListItemComponent,
		ShoppingEditComponent,
		RecipeEditComponent,
		NoRecipeSelectedComponent,

		DropdownDirective,



		// sandbox
		ServerComponent,
		ServersComponent,
		SandboxComponent,
		ObservablesHomeComponent,

		HoverBorderDirective,
		UnlessDirective
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AppRoutingModule,
		ReactiveFormsModule
	],
	providers: [
		ShoppingListService,
		RecipesService,
		FirebaseService
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
