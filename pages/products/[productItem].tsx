
import { useRouter } from 'next/router';
import { ProductType } from '../../interfaces';

const Product = () => {
	const router = useRouter();
	const { id, title, category, description } = router.query;

	return (
		<div>
			{' '}
			<h1>Product {id}</h1>
			<h2> {title} </h2>
			<h3> {category} </h3>
			<h4> {description} </h4>
		</div>
	);
};

export default Product;
