import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
	token: string;

	constructor (private router: Router) { }

	signUpUser (userData: UserData): firebase.Promise<any> {
		return firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password)
			.catch(console.error);
	}

	signInUser (userData: UserData): firebase.Promise<any> {
		return firebase.auth().signInWithEmailAndPassword(userData.email, userData.password)
			.then(() => this.redirect())
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

	private redirect (route = '/'): Promise<boolean> {
		return this.router.navigate([route]);
	}
}

interface UserData {
	email: string;
	password: string;
}