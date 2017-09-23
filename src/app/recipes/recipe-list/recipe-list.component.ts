import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../shared/models/recipe.model';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../auth/auth.service';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
	isAuthenticated$: Observable<boolean>;

	@Input() recipes: Array<Recipe>;

	constructor (
		private authService: AuthService
	) {}

	ngOnInit () {
		this.isAuthenticated$ = this.authService.isAuthenticated();
	}
}
