import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './x_sandbox/servers/server/server.component';
import { ServersComponent } from './x_sandbox/servers/servers.component';
import { HeaderComponent } from './components/header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { HoverBorderDirective } from './x_sandbox/directives/hoverBorder.directive';
import { UnlessDirective } from './x_sandbox/directives/unless.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { SandboxComponent } from './x_sandbox/sandbox.component';
import { ObservablesHomeComponent } from './x_sandbox/observables-home/observables-home.component';
import { DatabaseService } from './shared/database.service';
import { AppStoreModule } from './app-store.module';
import { AuthModule } from './modules/auth/auth.module';
import { SharedModule } from './modules/shared/shared.module';
import { RecipesModule } from './modules/recipes/recipes.module';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		ShoppingListComponent,
		ShoppingEditComponent,

		// sandbox
		ServerComponent,
		ServersComponent,
		SandboxComponent,
		ObservablesHomeComponent,

		HoverBorderDirective,
		UnlessDirective,
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AppRoutingModule,
		AppStoreModule,

		SharedModule,
		AuthModule,
		RecipesModule
	],
	providers: [
		ShoppingListService,
		DatabaseService
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
