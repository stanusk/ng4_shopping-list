import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListService } from '../core/services/shopping-list.service';
import { ShoppingListRoutesModule } from './shopping-list-routes.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [
		ShoppingListComponent,
		ShoppingEditComponent
	],
	imports: [
		SharedModule,
		ShoppingListRoutesModule,

		FormsModule
	]
})
export class ShoppingListModule {}
