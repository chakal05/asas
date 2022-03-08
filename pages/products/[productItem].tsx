import { useRouter } from 'next/router';
import Image from 'next/image';
import { ProductType } from '../../interfaces';

const Product = () => {
	const router = useRouter();
	const { id, title, category, description, img, price } = router.query;

	return (
		<div>
			{' '}
			<div className=' p-5 mx-5 mt-2 text-center '>
				<div className='p-5  mb-5'>
					<Image src={img as any} width='400px' height='400px' alt='title' />
				</div>

				<div>
					<div>
						<p className='text-2xl font-bold '> {title} </p>
						<p className='my-3 underline'> {price} Fdj </p>
					</div>
					<div className='grid grid-cols-2 text-center my-12'>
						<p className='text-lg'>
							Product category:<span className='font-bold'> {category}</span>
						</p>
						<p className='text-lg'>
							Product reference: <span className='font-bold'> {id}</span>
						</p>
					</div>
					<div>
						<p className='w-2/4 mx-auto font-bold text-lg '>
							{' '}
							Beskrivning : <span className='font-thin'> {description}</span>{' '}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
