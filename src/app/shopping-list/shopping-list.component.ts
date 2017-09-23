import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'app-shopping-list',
	templateUrl: './shopping-list.component.html',
	styleUrls: ['./shopping-list.component.scss']
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
