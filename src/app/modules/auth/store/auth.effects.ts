import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import { UserData } from '../../core/services/auth.service';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
	constructor (
		private actions$: Actions,
		private router: Router
	) {}

	@Effect() signUp = this.actions$
		.ofType(AuthActions.SIGN_UP)
		.map((action: AuthActions.SignUp) => action.payload)
		.switchMap((userData: UserData) => {
			return Observable.fromPromise(firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password));
		})
		.switchMap(() => Observable.fromPromise(firebase.auth().currentUser.getIdToken()))
		.mergeMap((token: string) => {
			this.router.navigate(['/']);
			return [
				{ type: AuthActions.SIGNED_UP },
				{ type: AuthActions.SET_TOKEN, payload: token }
			];
		});

	@Effect() signIn = this.actions$
		.ofType(AuthActions.SIGN_IN)
		.map((action: AuthActions.SignIn) => action.payload)
		.switchMap((userData: UserData) => {
			return Observable.fromPromise(firebase.auth().signInWithEmailAndPassword(userData.email, userData.password));
		})
		.switchMap(() => Observable.fromPromise(firebase.auth().currentUser.getIdToken()))
		.mergeMap((token: string) => {
			this.router.navigate(['/']);
			return [
				{ type: AuthActions.SIGNED_IN },
				{ type: AuthActions.SET_TOKEN, payload: token }
			];
		});

	@Effect() signOut = this.actions$
		.ofType(AuthActions.SIGN_OUT)
		.switchMap(() => Observable.fromPromise(firebase.auth().signOut()))
		.map(() => ({ type: AuthActions.SIGNED_OUT }));
}
