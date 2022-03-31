import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';

const Product = () => {
	const router = useRouter();
	const { id, title, category, description, img, price } = router.query;

	return (
		<div>
			<Head>
				<title> Sams - {title} </title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className=' p-1 mx-1 mt-5 '>
				<div className='p-5 text-center border-2 rounded  '>
					<Image src={img as any} width='300px' height='300px' alt='title' />
				</div>

				<div className='mt-7'>
					<div className='grid grid-cols-2 '>
						<div>
							<p className='text-2xl  '> {title} </p>
							<p className='my-3 font-bold text-xl '> {price} Fdj </p>
						</div>
						<div className='text-right '>
							<button className='bg-slate-600 text-white p-2 rounded-md'>
								{' '}
								SAVE{' '}
							</button>
						</div>
					</div>
					<div className=' my-5 w-full border-b border-gray-300'></div>
					<div className='my-8'>
						<button className='mb-5 bg-slate-600 text-white w-full rounded p-2'>
							{' '}
							SEND MESSAGE{' '}
						</button>
						<p className='text-lg'>
							{' '}
							Seller : <span className='font-bold '>{'Ahmed Moussa'}</span>{' '}
						</p>
					</div>
					<div>
						<p className='font-bold text-lg '>
							{' '}
							Description : <br/> <span className='font-thin'>
								{' '}
								{description}
							</span>{' '}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
