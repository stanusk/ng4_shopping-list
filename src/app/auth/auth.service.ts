import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
	token: string;

	constructor () { }

	signUpUser (userData: UserData): firebase.Promise<any> {
		return firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password)
			.catch(console.error);
	}

	signInUser (userData: UserData): firebase.Promise<any> {
		return firebase.auth().signInWithEmailAndPassword(userData.email, userData.password)
			.then(() => firebase.auth().currentUser.getToken())
			.then(token => this.token = token)
			.catch(console.error);
	}

	signOut () {
		firebase.auth().signOut();

		delete this.token;
	}

	getToken (): string {
		firebase.auth().currentUser.getToken()
			.then(token => this.token = token);

		return this.token;
	}

	isAuthenticated (): boolean {
		return !!this.token;
	}
}

interface UserData {
	email: string;
	password: string;
}