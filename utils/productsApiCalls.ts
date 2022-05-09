import {setEnv} from './sharedFeatures';

const dev = setEnv();

const getByCity = async (city: string) => {
	const res = await fetch(`${dev}/api/products/?city=${city}`);
	const products = await res.json();
	return products;
};

const getByCategory = async (category: string) => {
	const res = await fetch(`${dev}/api/products/?category=${category}`);
	const products = await res.json();
	return products;
};

const getPromoted = async () => {
	const res = await fetch(`${dev}/api/products/?promoted=${true}`);
	const products = await res.json();
	return products;
};

const getProductById = async (id: string) => {
	const res = await fetch(`${dev}/api/products/?id=${id}`);
	const product = await res.json();
	return product;
};

export { getByCity, getByCategory, getPromoted, getProductById};
