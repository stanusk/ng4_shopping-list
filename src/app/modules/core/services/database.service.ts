import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable()
export class DatabaseService {
	private dbUrl = 'https://udemy-course-ng4-7a27a.firebaseio.com';

	private _getRequest = this._makeRequestFactory('GET');
	private _putRequest = this._makeRequestFactory('PUT');

	constructor (
		private httpClient: HttpClient
	) {}

	save (dataType: string, data: any): Observable<Object> {
		return this._putRequest(dataType, data);
	}

	// save (dataType: string, data: any): Observable<Object> {
	// 	return this.httpClient.put(`${this.dbUrl}/${dataType}.json`, data);
	// }

	load (dataType: string): Observable<Object> {
		return this._getRequest(dataType);
	}

	// load (dataType: string): Observable<Object> {
	// 	return this.httpClient.get(`${this.dbUrl}/${dataType}.json`);
	// }

	private _makeRequestFactory (requestType: 'PUT' | 'GET') {
		return (dataType, data?) => {
			const url = `${this.dbUrl}/${dataType}.json`;
			const req = new HttpRequest(requestType, url, data ? data : null);

			return this.httpClient.request(req);
		};
	}
}
