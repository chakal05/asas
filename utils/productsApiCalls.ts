import { productSlice } from '../store/productsSlice';
import { setEnv } from './sharedFeatures';

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

const saveProduct = async (product: any) => {
	const toSave = await fetch(`${dev}/api/products`, {
		method: 'POST',
		body: JSON.stringify(product)
	});

	return await toSave.json();
};

const getSavedList = async (savedList) => {
	const res = await fetch(`${dev}/api/products/?savedList=${savedList}`);
	const products = await res.json();
	return products;
};

const removeFromSaved = async (item) => {
	const res = await fetch(`${dev}/api/products`, {
		method: 'POST',
		body: JSON.stringify(item)
	});
	const products = await res.json();
	return products;
};

const addProduct = async (query: {}) => {
	const request = await fetch(`${dev}/api/products`, {
		method: 'POST',
		// headers: {
		// 	'Content-Type': 'multipart/form-data',
		// },
		body: JSON.stringify(query)
	});

	return await request.json();
};

export {
	getByCity,
	getByCategory,
	getPromoted,
	getProductById,
	saveProduct,
	getSavedList,
	removeFromSaved,
	addProduct
};
