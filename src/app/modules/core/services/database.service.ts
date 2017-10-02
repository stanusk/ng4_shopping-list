import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DatabaseService {
	private dbUrl = 'https://udemy-course-ng4-7a27a.firebaseio.com';

	constructor (
		private httpClient: HttpClient,
		private authService: AuthService
	) {}

	save (dataType: string, data: any): Observable<Object> {
		return this.authService.getToken()
			.switchMap(token => this.httpClient.put(`${this.dbUrl}/${dataType}.json?auth=${token}`, data));
	}

	load <T>(dataType: string): Observable<T> {
		return this.authService.getToken()
			.switchMap(token => this.httpClient.get<T>(`${this.dbUrl}/${dataType}.json?auth=${token}`));
	}
}
