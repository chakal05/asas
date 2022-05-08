const getByCity = async (city) => {
	const res = await fetch(`http://localhost:3000/api/products/?city=${city}`);
	const products = await res.json();
	return products;
};

const getByCategory = async (category) => {
	const res = await fetch(
		`http://localhost:3000/api/products/?category=${category}`
	);
	const products = await res.json();
    return products;
};

export { getByCity, getByCategory };
