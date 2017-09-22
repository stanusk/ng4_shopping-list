import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
	selector: 'app-root',
	template: `

		<app-header></app-header>

		<div class="container">
			<div class="row">
				<div class="col-xs-12">

					<router-outlet></router-outlet>

					<!--<app-servers></app-servers>-->

				</div>
			</div>
		</div>

	`
})
export class AppComponent implements OnInit {
	ngOnInit () {
		firebase.initializeApp({
			apiKey: 'AIzaSyAS3MZ5GOwG3tM4vNvHDzbiiq5JXusz-w4',
			authDomain: 'udemy-course-ng4-7a27a.firebaseapp.com'
		});
	}
}
