import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './x_sandbox/servers/server/server.component';
import { ServersComponent } from './x_sandbox/servers/servers.component';
import { HeaderComponent } from './components/header/header.component';
import { HoverBorderDirective } from './x_sandbox/directives/hoverBorder.directive';
import { UnlessDirective } from './x_sandbox/directives/unless.directive';
import { AppRoutingModule } from './app-routing.module';
import { SandboxComponent } from './x_sandbox/sandbox.component';
import { ObservablesHomeComponent } from './x_sandbox/observables-home/observables-home.component';
import { DatabaseService } from './shared/database.service';
import { AppStoreModule } from './app-store.module';
import { AuthModule } from './modules/auth/auth.module';
import { SharedModule } from './modules/shared/shared.module';
import { RecipesModule } from './modules/recipes/recipes.module';
import { ShoppingListModule } from './modules/shopping-list/shopping-list.module';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,

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
		RecipesModule,
		ShoppingListModule
	],
	providers: [
		DatabaseService
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
