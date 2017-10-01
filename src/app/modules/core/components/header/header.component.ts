import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { ShoppingListService } from '../../services/shopping-list.service';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
	isAuthenticated$: Observable<boolean>;

	constructor (
		private recipesService: RecipesService,
		private shoppingListService: ShoppingListService,
		public authService: AuthService
	) {}

	ngOnInit () {
		this.isAuthenticated$ = this.authService.isAuthenticated();
	}

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
