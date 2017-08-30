import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
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
