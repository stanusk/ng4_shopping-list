// todo: do not import all, just what needed
import 'rxjs/Rx';

import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { HeaderComponent } from './components/header/header.component';
import { AuthService } from './services/auth.service';
import { DatabaseService } from './services/database.service';
import { RecipesService } from './services/recipes.service';
import { ShoppingListService } from './services/shopping-list.service';
import { AppRoutingModule } from '../../app-routing.module';
import { AppStoreModule } from '../../app-store.module';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';

@NgModule({
	declarations: [
		HeaderComponent,
		HomeComponent
	],
	providers: [
		AuthService,
		DatabaseService,
		RecipesService,
		ShoppingListService
	],
	imports: [
		HttpModule,
		BrowserModule,
		AppRoutingModule,
		AppStoreModule,

		SharedModule,
	],
	exports: [
		HeaderComponent,

		HttpModule,
		BrowserModule,
		AppRoutingModule,
		AppStoreModule
	]
})
export class CoreModule {}
