import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { shoppingListReducer, ShoppingListState } from './shopping-list/store/shopping-list.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export interface AppState {
	shoppingList: ShoppingListState;
}


@NgModule({
	imports: [
		StoreModule.forRoot({shoppingList: shoppingListReducer}),
		StoreDevtoolsModule.instrument()
	],
	exports: [
		StoreModule
	]
})
export class AppStoreModule {}
