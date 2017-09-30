import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';

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
		CommonModule,
		FormsModule,

		AuthRoutesModule
	]
})
export class AuthModule {}
