import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { RecipesModule } from './modules/recipes/recipes.module';
import { ShoppingListModule } from './modules/shopping-list/shopping-list.module';
import { CoreModule } from './modules/core/core.module';

@NgModule({
	declarations: [ AppComponent ],
	imports: [
		// eagerly loaded
		CoreModule,

		// todo: lazy loaded
		AuthModule,
		RecipesModule,
		ShoppingListModule
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
