export interface ProductType {
	//id: number;
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
		id: number;
		title: string;
		price: number;
		category: string;
		city: string;
		added: string;
	};
}
