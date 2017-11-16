import { NgModule } from '@angular/core';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { shoppingListReducer, ShoppingListState } from './modules/shopping-list/store/shopping-list.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { authReducer, AuthState } from './modules/auth/store/auth.reducers';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './modules/auth/store/auth.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { environment } from '../environments/environment';
import { ShoppingListEffects } from './modules/shopping-list/store/shopping-list.effects';

export interface AppState {
	shoppingList: ShoppingListState;
	auth: AuthState;
}

const appReducers: ActionReducerMap<AppState> = {
	shoppingList: shoppingListReducer,
	auth: authReducer
};

@NgModule({
	imports: [
		StoreModule.forRoot(appReducers),
		!environment.production ? StoreDevtoolsModule.instrument() : [],
		EffectsModule.forRoot([AuthEffects, ShoppingListEffects]),
		StoreRouterConnectingModule
	],
	exports: [
		StoreModule
	]
})
export class AppStoreModule {}
