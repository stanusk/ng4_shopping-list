import { Commodity, newCommodityCached } from './commodity.model';

export class Ingredient {
	private _commodity: Commodity;
	private _quantity: number;
	readonly id: number;

	get name (): string {
		return this._commodity.name;
	}

	set name (newName: string) {
		this._commodity.name = newName;
	}

	get quantity (): number {
		return this._quantity;
	}

	set quantity (newQuantity: number) {
		if (newQuantity > 0) {
			this._quantity = newQuantity;
		} else {
			throw new Error(`Ingredient quantity must be > 0. Your value is ${newQuantity}`);
		}
	}

	constructor ({name, quantity, id}: { name: string, quantity: number, id: number }) {
		this._commodity = newCommodityCached(name);
		this._quantity = quantity || 1;
		this.id = id;
	}

	addOne (): number {
		return ++this._quantity;
	}

	removeOne (): number {
		if (this._quantity > 1) {
			this._quantity--;
		}

		return this._quantity;
	}
}

let lastIngredientId = 0;

export function newIngredient ({name, quantity}: { name: string, quantity?: number }): Ingredient {
	return new Ingredient({name, quantity, id: ++lastIngredientId});
}
