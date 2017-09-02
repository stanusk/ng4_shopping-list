import { Component } from '@angular/core';

@Component({
	selector: 'app-no-recipe-selected',
	template: `
		<div class="row">
			<div class="col-xs-12">
				<h4>Please select a Recipe!</h4>
			</div>
		</div>
	`
})
export class NoRecipeSelectedComponent {}
