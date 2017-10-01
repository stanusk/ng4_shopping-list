import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {

	constructor (private authService: AuthService) { }

	ngOnInit () {
	}

	signUp (form: NgForm) {
		this.authService.signUp(form.value);
	}
}
