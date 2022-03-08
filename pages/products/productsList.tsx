import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import Search from '../../components/search';
import { useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import { ProductType } from '../../interfaces/index';
import filter from '../../features/filter';

const Posts: NextPage = () => {
	// TODO Sort product according to btns

	const { filters } = useAppSelector((state: RootState) => state.filters);
	const { products } = useAppSelector((state: RootState) => state.produts);
	const filtered: ProductType[] = filter(products, { filters });

	return (
		<div>
			<div className='grid grid-cols-2'>
				<div>
					<Search />
				</div>
				<div className=' my-12 text-center md:flex '>
					<p className='text-5xl font-bold  p-5 md:self-center '>
						{' '}
						{`Your search gave  ${filtered.length} items`}{' '}
					</p>
				</div>
			</div>
			<div className='mt-12'>
				{filtered.map((item) => {
					return (
						<Link
							href={{
								pathname: `/products/productItem`,
								query: {
									id: item.id,
									title: item.title,
									description: item.description,
									img: item.image,
									category: item.category,
									price: item.price,
								},
							}}
							passHref
							key={item.id}
						>
							<a>
								<div className='border-2 my-5 mx-3 rounded shadow-lg h-30 p-4 flex flex-row '>
									<div className='basis-1/4 text-center pt-3 md:pt-0 '>
										<Image src={item.image} alt='sr' width={150} height={150} />
									</div>
									<div className='basis-3/4 p-2 '>
										<p className='text-2xl font-thin'>{item.title}</p>
										<p>{item.description}</p>
										<div className='grid grid-cols-2 text-center my-3 '>
											<p className='mr-5 p-1'> City: {item.city}</p>
											<p className='mr-5 p-1 '> {item.price} Fdj </p>
										</div>
									</div>
								</div>
							</a>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Posts;
