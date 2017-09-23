import { Response } from '@angular/http';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth/auth.service';

// todo rename to db service
@Injectable()
export class FirebaseService {
	private dbUrl = 'https://udemy-course-ng4-7a27a.firebaseio.com';

	constructor (
		private http: Http,
		private authService: AuthService
	) {}

	save (dataType: string, data: any): Observable<Response> {
		return this.authService.getToken()
			.switchMap(token => this.http.put(`${this.dbUrl}/${dataType}.json?auth=${token}`, data));
	}

	load (dataType: string): Observable<Response> {
		return this.authService.getToken()
			.switchMap(token => this.http.get(`${this.dbUrl}/${dataType}.json?auth=${token}`));
	}
}
