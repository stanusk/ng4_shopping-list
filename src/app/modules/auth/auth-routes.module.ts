import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

const authRoutes: Routes = [
	{ path: '', children: [
		{ path: '', pathMatch: 'full', redirectTo: 'signin' },
		{ path: 'signin', component: SigninComponent },
		{ path: 'signup', component: SignupComponent }
	] }
];

@NgModule({
	imports: [
		RouterModule.forChild(authRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AuthRoutesModule {}
