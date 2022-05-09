import { FilterState, ProductType } from '../interfaces';

const filter = (products: ProductType[], { filters }: FilterState) => {
	const { title, city, price, category, added } = filters;
	return products.filter(
		(item: {
			title: string;
			description: string;
			category: string;
			city: string;
		}) => {
			const textInTitle = item.title
				.toLowerCase()
				.includes(title.toLowerCase());
			const textInDescription = item.description
				.toLowerCase()
				.includes(title.toLowerCase());

			const getByText = textInTitle || textInDescription;
			const getByCIty = item.city.toLowerCase().match(city.toLowerCase());
			const getByCategory = item.category.match(category);

			if (title && city === 'All over Djibouti') return getByText;
			if (title && city !== 'All over Djibouti') return getByText && getByCIty;
			if (!title && city !== 'All over Djibouti') return getByCIty;
			if (city === 'All over Djibouti') return item;

			return item;
		}
	);
};

export default filter;
