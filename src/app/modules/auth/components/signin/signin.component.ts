import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {

	constructor (private authService: AuthService) { }

	ngOnInit () {
	}

	signIn (form: NgForm) {
		this.authService.signIn(form.value);
	}

}
