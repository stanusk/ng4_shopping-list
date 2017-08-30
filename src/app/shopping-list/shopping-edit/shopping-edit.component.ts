import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/models/ingredient.model';
import * as _ from 'lodash';

@Component({
	selector: 'app-shopping-edit',
	templateUrl: './shopping-edit.component.html',
	styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnChanges {
	@Input('itemToEdit') shoppingListItem: Ingredient;
	@Output() addNewItem = new EventEmitter<NewItem>();
	@Output() changeItem = new EventEmitter<Ingredient>();
	@Output() deleteItem = new EventEmitter<number>();

	@ViewChild('f') form: HTMLFormElement;

	public editedItem: { name: string, quantity: number, id?: number } = {name: '', quantity: null};

	ngOnChanges (changes: SimpleChanges) {
		if (changes.shoppingListItem && changes.shoppingListItem.currentValue) {
			this.editedItem = _.cloneDeep(changes.shoppingListItem.currentValue);
		}
	}

	onAddNew () {
		this.addNewItem.emit(this.editedItem);
		this.reset();
	}

	onChange () {
		this.changeItem.emit(<Ingredient>this.editedItem);
		this.reset();
	}

	onDelete () {
		this.deleteItem.emit(this.editedItem.id);
		this.reset();
	}

	reset () {
		this.editedItem = {name: '', quantity: null};
		this.shoppingListItem = null;
	}

	areIdentical (a: any, b: any): boolean {
		return _.isEqual(a, b);
	}

}

export interface NewItem {
	name: string;
	quantity: number;
}
