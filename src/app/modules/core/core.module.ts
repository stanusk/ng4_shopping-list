import 'rxjs/Observable';
import 'rxjs/Subject';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/toPromise';


import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './components/header/header.component';
import { AuthService } from './services/auth.service';
import { DatabaseService } from './services/database.service';
import { RecipesService } from './services/recipes.service';
import { ShoppingListService } from './services/shopping-list.service';
import { AppRoutingModule } from '../../app-routing.module';
import { AppStoreModule } from '../../app-store.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { AuthInterceptor } from './services/auth.interceptor';

@NgModule({
	declarations: [
		HeaderComponent,
		HomeComponent
	],
	providers: [
		AuthService,
		DatabaseService,
		RecipesService,
		ShoppingListService,
		{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
	],
	imports: [
		BrowserModule,
		HttpClientModule,

		AppRoutingModule,
		AppStoreModule,

		SharedModule,
	],
	exports: [
		HeaderComponent,

		BrowserModule,
		HttpClientModule,

		AppRoutingModule,
		AppStoreModule
	]
})
export class CoreModule {}
