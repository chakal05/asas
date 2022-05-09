export interface ProductType {
	_id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	images: string[];
	stock:number;
	city: string;
	added: string;
	sellerId: string;
}

export interface DataState {
	products: ProductType[];
	// status: 'idle' | 'loading' | 'failed'
}

export interface FilterState {
	filters: {
		title: string;
		price: number;
		category: string;
		city: string;
		added: string;
	};
}
