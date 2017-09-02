import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `

		<app-header
			[visibleSection]="visibleSection"
			(navigate)="onNav($event)"
		></app-header>

		<div class="container">
			<div class="row">
				<div class="col-xs-12">

					<app-recipes
						*ngIf="visibleSection === 'recipes'"
					></app-recipes>

					<app-shopping-list
						*ngIf="visibleSection === 'shoppingList'"
					></app-shopping-list>

					<!--<app-servers></app-servers>-->

				</div>
			</div>
		</div>
		
	`
})
export class AppComponent {
	visibleSection: string;
	private DEF_SECTION = 'shoppingList';

	constructor () {
		this.visibleSection = this.DEF_SECTION;
	}

	onNav (selectedSection: string) {
		this.visibleSection = selectedSection;
	}
}
