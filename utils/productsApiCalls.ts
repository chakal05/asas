let dev;

if (process.env.NODE_ENV === 'development') dev = process.env.DEV_URL;
else dev = process.env.PROD_URL;

const getByCity = async (city) => {
	const res = await fetch(`${dev}/api/products/?city=${city}`);
	const products = await res.json();
	return products;
};

const getByCategory = async (category) => {
	const res = await fetch(`${dev}/api/products/?category=${category}`);
	const products = await res.json();
	return products;
};

const getPromoted = async () => {
	const res = await fetch(`${dev}/api/products/?promoted=${true}`);
	const products = await res.json();
	return products;
};

export { getByCity, getByCategory, getPromoted };
