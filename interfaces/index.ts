export interface ProductType {
	_id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
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
		_id: string;
		title: string;
		price: number;
		category: string;
		city: string;
		added: string;
	};
}
