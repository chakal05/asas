import * as React from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch } from '../redux/hooks';
import { filterByCity, filterByText } from '../features/filtersSlice';

import {
	Card,
	CardContent,
	CardActions,
	CardHeader,
	TextField,
	MenuItem,
	Button,
} from '@mui/material/';

export default function RecipeReviewCard() {
	const dispatch = useAppDispatch();
	const [city, setCity] = React.useState('All over Djibouti');
	const [product, setProduct] = React.useState('');
	const router = useRouter();

	const handleProduct = (event: React.ChangeEvent<HTMLInputElement>) => {
		setProduct(event.target.value);
	};

	const handleCity = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCity(event.target.value);
	};

	const handleSubmit = () => {
		dispatch(filterByCity(city));
		dispatch(filterByText(product));

		router.push({
			pathname: '/products/',
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
		<div className='shadow-md border-2  m-3 rounded'>
			<div className='pl-5 my-3'>
				<p className='text-4xl font-700'> Welcome to Asas</p>
				<p className='text-xl ml-2 mt-1 text-slate-600'>
					{`Date: ${new Date().toISOString().substring(0, 10)}`}{' '}
				</p>
			</div>
			<div className='my-5 mx-3'>
				<div className='mb-3 '>
					<input
						className=' border border-slate-300  rounded-md w-full p-3 '
						value={product}
						onChange={handleProduct}
						placeholder={'What are you looking for?'}
					/>
				</div>
				<form>
					<label className='block'>
						<span className='block text-sm font-medium text-slate-700'>
							Choose city{' '}
						</span>
					<select
						value={city}
						onChange={handleCity}
						className='border border-slate-300 bg-white text-slate-700 rounded-md w-full my-1 py-4'
					>
						{cities.map((option, index) => (
							<option key={index} value={option}>
								{option}
							</option>
						))}
					</select>
					</label>

				</form>
			</div>
			<div className='flex justify-center'>
				<button
					onClick={handleSubmit}
					className='border bg-slate-600 text-white rounded p-2 mb-4 w-32'
				>
					Search
				</button>
			</div>
		</div>
	);
}
