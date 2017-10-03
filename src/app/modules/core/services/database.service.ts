import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class DatabaseService {
	private dbUrl = 'https://udemy-course-ng4-7a27a.firebaseio.com';

	constructor (
		private httpClient: HttpClient,
		private authService: AuthService
	) {}

	save (dataType: string, data: any): Observable<Object> {
		return this._getToken(token => {
			const url = `${this.dbUrl}/${dataType}.json`;
			const params = new HttpParams().set('auth', token);

			return this.httpClient.put(url, data, {params});
		});
	}

	load <T>(dataType: string): Observable<T> {
		return this._getToken<T>(token => {
			const url = `${this.dbUrl}/${dataType}.json`;
			const params = new HttpParams().set('auth', token);

			return this.httpClient.get<T>(url, {params});
		});
	}

	private _getToken <T>(fn): Observable<T> {
		return this.authService.getToken()
			.switchMap(fn);
	}
}
