import * as AuthActions from './auth.actions';

export interface AuthState {
	token: string;
	isAuthenticated: boolean;
}

const initAuthState: AuthState = {
	token: null,
	isAuthenticated: false
};

export function authReducer (state = initAuthState, action: AuthActions.AuthActions): AuthState {
	switch (action.type) {
		case AuthActions.SIGNED_UP:
		case AuthActions.SIGNED_IN:
			return {
				...state,
				isAuthenticated: true
			};

		case AuthActions.SIGNED_OUT:
			return {
				...state,
				isAuthenticated: false,
				token: null
			};

		case AuthActions.SET_TOKEN:
			return {
				...state,
				token: action.payload
			};

		default:
			return state;
	}
}
