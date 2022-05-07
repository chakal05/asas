import * as React from 'react';

import { useAppDispatch } from '../redux/hooks';
import { filterByCity, filterByText } from '../features/filtersSlice';

type Props = {
	submit: (city: string) => void;
};

const SearchBox: React.FC<Props> = ({ submit }) => {
	const dispatch = useAppDispatch();
	const [city, setCity] = React.useState('All over Djibouti');
	const [product, setProduct] = React.useState('');

	const handleProduct = (event: React.ChangeEvent<HTMLInputElement>) => {
		setProduct(event.target.value);
	};

	const handleCity = (event: React.FormEvent<HTMLSelectElement>) => {
		const el = event.target as HTMLSelectElement;
		setCity(el.value);
	};

	const handleSubmit = () => {
	//	event.preventDefault();
		dispatch(filterByCity(city));
		dispatch(filterByText(product));
	};

	const cities = [
		'Djibouti City',
		'Ali-Sabieh',
		'Dikhil',
		'Tadjoura',
		'Arta',
		'Obock',
		'All over Djibouti',
	];

	return (
		<div className='bg-slate-200 sm:p-2 mx-2 p-3 rounded '>
			<div className='sm:flex'>
				<div className='sm:my-1 sm:basis-2/5 sm:mx-0.5'>
					<label className=' '>
						<span className='block  font-bold  text-slate-700'>
							What are you looking for ?{' '}
						</span>
						<input
							className=' border border-slate-300 rounded-md  w-full h-14 p-2 '
							value={product}
							onChange={handleProduct}
							placeholder={'Product name'}
						/>
					</label>
				</div>
				<div className='my-3 sm:my-1 sm:basis-2/5 sm:mx-0.5'>
					<label className=''>
						<span className='block font-bold text-slate-700'>
							Choose the city{' '}
						</span>
						<select
							value={city}
							onChange={handleCity}
							className='border border-slate-300 bg-white text-slate-700 rounded-md w-full h-14 p-2'
						>
							{cities.map((option, index) => (
								<option key={index} value={option}>
									{option}
								</option>
							))}
						</select>
					</label>
				</div>

				<div className='mt-6 mb-3 sm:mt-7 sm:mb-1  sm:basis-1/5 sm:mx-0.5 '>
					<button
						type='button'
						onClick={() => {
							handleSubmit();
							submit(city);
						}}
						className='bg-slate-600 text-white rounded-md p-4 w-full'
					>
						Search
					</button>
				</div>
			</div>
		</div>
	);
};

export default SearchBox;
