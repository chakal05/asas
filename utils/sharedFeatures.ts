const setEnv = (): string | undefined => {
	let isDev: string | undefined;

	if (process.env.NODE_ENV === 'development') {
		isDev = process.env.NEXT_PUBLIC_DEV_URL;
	} else {
		isDev = process.env.NEXT_PUBLIC_PROD_URL;
	}

	return isDev;
};

const filterCategory = (arr, id) =>
	arr.filter((item) => item._id !== id).splice(0, 4);

export { setEnv, filterCategory };
