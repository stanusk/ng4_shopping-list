import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { CoreModule } from './modules/core/core.module';

@NgModule({
	declarations: [ AppComponent ],
	imports: [
		// eagerly loaded
		CoreModule,

		// todo: lazy loaded
		AuthModule
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
