import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

import { AuthRoutesModule } from './auth-routes.module';

// todo: store, services?
@NgModule({
	declarations: [
		SignupComponent,
		SigninComponent
	],
	imports: [
		SharedModule,
		FormsModule,

		AuthRoutesModule
	]
})
export class AuthModule {}
