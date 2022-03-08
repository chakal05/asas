import { useContext } from 'react';
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
		<div className='container'>
			<div>
				<div>
					<Search />
				</div>
				<div className='text-center my-5'>
					<p className='text-xl font-bold'>
						{' '}
						{`${filtered.length} items found`}{' '}
					</p>
				</div>
				<div>
					{filtered.map((item) => {
						return (
							<Link
								href={{
									pathname: `/products/productItem`,
									query: {
										id  : item.id,
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
									<div className='border-2 my-5 shadow-lg h-30 p-4 flex flex-row'>
										<div className='basis-1/4 text-center'>
											<Image
												src={item.image}
												alt='sr'
												width={200}
												height={150}
											/>
										</div>
										<div className='basis-3/4 '>
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
		</div>
	);
};

export default Posts;
