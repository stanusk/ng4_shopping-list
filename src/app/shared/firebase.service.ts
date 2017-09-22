import { Response } from '@angular/http';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// todo rename to db service
@Injectable()
export class FirebaseService {
	private dbUrl = 'https://udemy-course-ng4-7a27a.firebaseio.com/';

	constructor (
		private http: Http
	) {}

	save (dataType: string, data: any): Observable<Response> {
		return this.http.put(this.dbUrl + dataType + '.json', data);
	}

	load (dataType: string): Observable<Response> {
		return this.http.get(this.dbUrl + dataType + '.json');
	}
}