import { Component } from '@angular/core';
import { RecipesService } from '../recipes/recipes.service';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth/auth.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

	constructor (
		private recipesService: RecipesService,
		private shoppingListService: ShoppingListService,
		public authService: AuthService
	) {}

	saveAllData () {
		Observable.merge(
			this.recipesService.saveRecipes(),
			this.shoppingListService.saveItems()
		)
			.subscribe(result => {
				console.log(result);
			})
		;
	}

	getAllData () {
		Observable.merge(
			this.recipesService.loadRecipes(),
			this.shoppingListService.loadItems()
			)
			.subscribe(result => {
				console.log(result);
			})
		;
	}
}
