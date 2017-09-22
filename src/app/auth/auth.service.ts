import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

	constructor () { }

	signUpUser (userData: UserData): firebase.Promise<any> {
		return firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password)
			.catch(console.error);
	}

}

interface UserData {
	email: string;
	password: string;
}