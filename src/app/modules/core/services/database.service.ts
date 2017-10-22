import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DatabaseService {
	private dbUrl = 'https://udemy-course-ng4-7a27a.firebaseio.com';

	constructor (
		private httpClient: HttpClient
	) {}

	save (dataType: string, data: any): Observable<Object> {
		return this.httpClient.put(`${this.dbUrl}/${dataType}.json`, data);
	}

	load (dataType: string): Observable<Object> {
		return this.httpClient.get(`${this.dbUrl}/${dataType}.json`);
	}
}
