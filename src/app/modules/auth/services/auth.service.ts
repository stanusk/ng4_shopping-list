import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app-store.module';
import * as AuthActions from '../store/auth.actions';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
	constructor (
		private store: Store<AppState>
	) {}

	isAuthenticated (): Observable<boolean> {
		return this.store.select('auth', 'isAuthenticated');
	}

	signUp (userData: UserData) {
		this.store.next(new AuthActions.SignUp(userData));
	}

	signIn (userData: UserData) {
		this.store.next(new AuthActions.SignIn(userData));
	}

	signOut () {
		this.store.next(new AuthActions.SignOut());
	}

	getToken (): Observable<string> {
		return this.store.select('auth', 'token');
	}
}

export interface UserData {
	email: string;
	password: string;
}