import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

@NgModule({
	declarations: [
		AppComponent,
		ServerComponent,
		ServersComponent,
		HeaderComponent,
		ShoppingListComponent,
		RecipeListComponent,
		RecipeDetailComponent,
		RecipesComponent,
		RecipeListItemComponent,
		ShoppingEditComponent,

		HoverBorderDirective,
		UnlessDirective,
		DropdownDirective
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
