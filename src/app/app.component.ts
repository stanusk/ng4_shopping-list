import { Component } from '@angular/core';

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
export class AppComponent {
}
