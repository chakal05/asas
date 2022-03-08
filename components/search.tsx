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
			pathname:'/products/productsList',

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
		<div className='shadow-md  border-2  m-3 rounded'>
			<div className='pl-5 mt-3'>
				<p className='text-2xl font-700'> Welcome to Sams</p>
				<p className='text-md mt-1 text-slate-600'>
					{`Today: ${new Date().toISOString().substring(0, 10)}`}
				</p>
			</div>
			<div className='my-5 mx-3 '>
				<div className='mb-3 '>
					<input
						className=' border border-slate-300 rounded-md w-full p-3 '
						value={product}
						onChange={handleProduct}
						placeholder={'What are you looking for?'}
					/>
				</div>
				<form className='flex flex-row'>
					<label className='block basis-3/4'>
						<span className='block text-sm font-medium text-slate-700'>
							Choose city{' '}
						</span>
						<select
							value={city}
							onChange={handleCity}
							className='border border-slate-300 bg-white text-slate-700 rounded-md w-full py-4'
						>
							{cities.map((option, index) => (
								<option key={index} value={option}>
									{option}
								</option>
							))}
						</select>
					</label>
					<div className='mx-auto mt-5 '>
						<button
							type='submit'
							onClick={handleSubmit}
							className='border bg-slate-600 text-white rounded p-3 w-28'
						>
							Search
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
