import Link from 'next/link';
import Image from 'next/image';

const ItemComponent = ({ product }) => {
	return (
		//<li key={product._id}>
			<Link
				href={{
					pathname: `/productItem/`,
					query: {
						id: product._id
					}
				}}
				passHref>
				<a>
					<div className='bg-white my-2 py-1 rounded shadow-lg hover:bg-slate-50  '>
						<div className='flex py-1 '>
							<div className='basis-1/5 '>
								<div className='relative w-32 h-32 mx-auto'>
									<Image src={product.images[0]} alt='sr' layout='fill' />
								</div>
							</div>
							<div className='basis-4/5 pl-5 '>
								<div className='grid grid-cols-2 '>
									<p className='text-sm sm:text-lg  text-slate-700'>
										{product.city}
									</p>
									<p className='text-right pr-3 text-sm sm:text-lg  text-slate-500'>
										{' '}
										{product.added}{' '}
									</p>
								</div>

								<p className='text-md sm:text-xl  my-1 sm:my-3 no-underline hover:underline'>
									{product.title}
								</p>
								<p className='text-lg sm:text-xl text-sky-900 font-bold '>
									{' '}
									{product.price} FDj{' '}
								</p>
							</div>
						</div>
					</div>
				</a>
			</Link>
	//	</li>
	);
};

export default ItemComponent;
