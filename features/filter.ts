const filter = (products: any[], { text }: any) => {
	return products.filter((item: { title: string; description: string }) => {
		const textInTitle = item.title.toLowerCase().includes(text.toLowerCase());
		const textInDescription = item.description
			.toLowerCase()
			.includes(text.toLowerCase());

		const textResult = textInTitle || textInDescription;

		return textResult;
	});
};

export default filter;
