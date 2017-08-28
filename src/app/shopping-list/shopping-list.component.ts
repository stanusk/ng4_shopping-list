import { Component, OnInit } from '@angular/core';
import {Ingredient, newIngredient} from '../shared-models/ingredient.model';
import {NewItem} from './shopping-edit/shopping-edit.component';
import * as _ from 'lodash';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  shoppingItems: Array<Ingredient> = [];

  itemToEdit: Ingredient;

  constructor() { }

  ngOnInit() {
    this.shoppingItems = this.getShoppingItems();
  }

  getShoppingItems (): Array<Ingredient> {
    return this.MOCK_makeItems();
  }

  editItem (item: Ingredient) {
    this.itemToEdit = item;
  }

  onAddNewItem (itemDataObj: NewItem) {
    this.shoppingItems.push(newIngredient(itemDataObj));
  }

  onChangeItem (newItem: Ingredient) {
    const oldItemPos = this.shoppingItems.findIndex(i => i.id === newItem.id);
    this.shoppingItems[oldItemPos] = newItem;

    this.itemToEdit = null;
  }

  onDeleteItem (id: number) {
    this.shoppingItems = this.shoppingItems.filter(i => i.id !== id);

    this.itemToEdit = null;
  }

  MOCK_makeItems (): Array<Ingredient> {
    const item = newIngredient({name: 'gule', quantity: 2});
    return [item];
  }

}
