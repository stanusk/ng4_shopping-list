import { NgModule } from '@angular/core';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { shoppingListReducer, ShoppingListState } from './shopping-list/store/shopping-list.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { authReducer, AuthState } from './auth/store/auth.reducers';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth/store/auth.effects';

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
		StoreDevtoolsModule.instrument(),
		EffectsModule.forRoot([AuthEffects])
	],
	exports: [
		StoreModule
	]
})
export class AppStoreModule {}
