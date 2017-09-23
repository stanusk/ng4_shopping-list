
import { Action } from '@ngrx/store';
import { UserData } from '../auth.service';

export const SIGNED_UP = 'SIGNED_UP';
export const SIGNED_IN = 'SIGNED_IN';
export const SIGNED_OUT = 'SIGNED_OUT';
export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
export const SET_TOKEN = 'SET_TOKEN';

export class SignUp implements Action {
	readonly type = SIGN_UP;
	constructor (public payload: UserData) {}
}

export class SignIn implements Action {
	readonly type = SIGN_IN;
	constructor (public payload: UserData) {}
}

export class SignOut implements Action {
	readonly type = SIGN_OUT;
}

export class SignedUp implements Action {
	readonly type = SIGNED_UP;
}

export class SignedIn implements Action {
	readonly type = SIGNED_IN;
}

export class SignedOut implements Action {
	readonly type = SIGNED_OUT;
}

export class SetToken implements Action {
	readonly type = SET_TOKEN;
	constructor (public payload: string) {}
}

export type AuthActions = SignUp | SignIn | SignOut | SignedUp | SignedIn | SignedOut | SetToken;
