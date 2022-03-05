import { useRouter } from 'next/router';
import Image from 'next/image';
import { ProductType } from '../../interfaces';

const Product = () => {
	const router = useRouter();
	const { id, title, category, description, img, price } = router.query;

	return (
		<div className='container'>
			{' '}
			<div className='border-2 shadow-2xl p-5 mx-5 mt-2 mb-2 md:mt-10 '>
				<div className='grid grid-cols-2 text-center'>
					<p className='mb-5'>Product category: {category}</p>
					<p className='mb-5'>Product reference: {id}</p>
				</div>

				<div className='text-center mb-5'>
					<Image src={img} width='400px' height='400px' alt='title' />
				</div>

				<div className='text-center'>
					<div>
						<p className='text-2xl font-bold '> {title} </p>
						<p className='my-3 underline'> {price} Fdj </p>
					</div>
					<div className=''>
						<p className='w-3/4 m-auto'> {description} </p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
