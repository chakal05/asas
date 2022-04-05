import * as React from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch } from '../redux/hooks';
import { filterByCity, filterByText } from '../features/filtersSlice';

export default function RecipeReviewCard() {
	const dispatch = useAppDispatch();
	const [city, setCity] = React.useState('All over Djibouti');
	const [product, setProduct] = React.useState('');
	const router = useRouter();

	const handleProduct = (event: React.ChangeEvent<HTMLInputElement>) => {
		setProduct(event.target.value);
		console.log(product);
	};

	const handleCity = (event: React.FormEvent<HTMLSelectElement>) => {
		const el = event.target as HTMLSelectElement;
		setCity(el.value);

		console.log(city);
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		dispatch(filterByCity(city));
		dispatch(filterByText(product));

		router.push({
			pathname: '/products/productsList',
		});
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
		<div className='bg-slate-200 w-4/5 mx-auto p-1 rounded '>

			<div className='my-5 mx-3 '>
				<div className='mb-3 '></div>
				<form className='flex flex-row '>
					<label className='block basis-2/4 mx-2'>
						<span className='block text-sm font-bold text-slate-700'>
							What are you looking for ?{' '}
						</span>
						<input
							className=' border border-slate-300 rounded-md  w-full h-14 p-2 '
							value={product}
							onChange={handleProduct}
							placeholder={'Product name'}
						/>
					</label>
					<label className='block basis-2/4'>
						<span className='block text-sm font-bold text-slate-700'>
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
					<div className='mx-1 mt-5 '>
						<button
							type='submit'
							onClick={handleSubmit}
							className='border bg-slate-600 text-white rounded p-2 h-14  w-28'
						>
							Search
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
