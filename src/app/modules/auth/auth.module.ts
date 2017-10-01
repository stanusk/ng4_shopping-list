import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from '../core/services/auth.service';

import { AuthRoutesModule } from './auth-routes.module';

// todo: store, services?
@NgModule({
	declarations: [
		SignupComponent,
		SigninComponent
	],
	providers: [
		AuthService,
		AuthGuard
	],
	imports: [
		SharedModule,
		FormsModule,

		AuthRoutesModule
	]
})
export class AuthModule {}
