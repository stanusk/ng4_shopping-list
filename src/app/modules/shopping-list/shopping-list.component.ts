import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/models/ingredient.model';
import { ShoppingListService } from '../core/services/shopping-list.service';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'app-shopping-list',
	templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {

	shoppingItems$: Observable<Array<Ingredient>>;

	constructor (private slService: ShoppingListService) {}

	ngOnInit () {
		this.shoppingItems$ = this.slService.getItems();
	}

	editItem (index: number) {
		this.slService.startEditingItem(index);
	}
}
