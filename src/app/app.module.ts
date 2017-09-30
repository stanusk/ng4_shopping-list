// todo: do not import all, just what needed
import 'rxjs/Rx';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { DatabaseService } from './shared/database.service';
import { AppStoreModule } from './app-store.module';
import { AuthModule } from './modules/auth/auth.module';
import { SharedModule } from './modules/shared/shared.module';
import { RecipesModule } from './modules/recipes/recipes.module';
import { ShoppingListModule } from './modules/shopping-list/shopping-list.module';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent
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
		// todo: remove
		ShoppingListModule
	],
	providers: [
		DatabaseService
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
