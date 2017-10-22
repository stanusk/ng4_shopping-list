
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

	constructor (private authService: AuthService) {}

	intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

		return this.authService.getToken().switchMap(token => {
			const reqCopy = req.clone({params: req.params.set('auth', token)});
			return next.handle(reqCopy);
		});
	}
}
