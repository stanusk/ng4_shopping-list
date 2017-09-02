export class Commodity {
	constructor (
		public name: string,
		readonly id: number
	) {}
}

let lastCommodityId = 0;
const commodities: Map<string, Commodity> = new Map();

export function newCommodityCached (name: string) {
	return commodities.get(name) || newCommodity(name, ++lastCommodityId);
}

function newCommodity (name: string, id: number): Commodity {
	const commodity = new Commodity(name, id);

	commodities.set(name, commodity);

	return commodity;
}
