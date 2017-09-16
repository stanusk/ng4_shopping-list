import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'app-shopping-list',
	templateUrl: './shopping-list.component.html',
	styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
	private subs: Array<Subscription>;
	shoppingItems: Array<Ingredient> = [];

	constructor (private slService: ShoppingListService) { }

	ngOnInit () {
		this.shoppingItems = this.slService.getItems();

		this.subs = [
			this.slService.itemsChange
				.subscribe(items => this.shoppingItems = items)
		];
	}

	editItem (index: number) {
		this.slService.editingItem.next(index);
	}

	ngOnDestroy () {
		this.subs.forEach(s => s.unsubscribe());
	}
}
