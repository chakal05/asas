import * as React from 'react';

import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { filterByCity, filterByText } from '../store/filtersSlice';
import { RootState } from '../redux/store';

type Props = {
	submit: (city: string, search: string) => void;
};

const SearchBox: React.FC<Props> = ({ submit }) => {
	const dispatch = useAppDispatch();
	const { filters } = useAppSelector((state: RootState) => state.filters);
	 const {city, title} = filters;
	const [location, setLocation] = React.useState(city);
	const [searchQuery, setsearchQuery] = React.useState(title);

	const handleProduct = (event: React.ChangeEvent<HTMLInputElement>) => {
		setsearchQuery(event.target.value);
	};

	const handleCity = (event: React.FormEvent<HTMLSelectElement>) => {
		const el = event.target as HTMLSelectElement;
		setLocation(el.value);
	};

	const handleSubmit = () => {
		dispatch(filterByCity(location));
		dispatch(filterByText(searchQuery));
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
					<input
						className=' border border-slate-300 rounded-md  w-full h-14 p-2 '
						value={searchQuery}
						onChange={handleProduct}
						placeholder={'What are you looking for ?'}
					/>
				</div>
				<div className='my-3 sm:my-1 sm:basis-2/5 sm:mx-0.5'>
					<select
						value={location}
						onChange={handleCity}
						className='border border-slate-300 bg-white text-slate-700 rounded-md w-full h-14 p-2'
					>
						{cities.map((option, index) => (
							<option key={index} value={option}>
								{option}
							</option>
						))}
					</select>
				</div>

				<div className='mt-6  sm:mt-1   sm:basis-1/5 sm:mx-0.5 '>
					<button
						type='button'
						onClick={() => {
							handleSubmit();
							submit(location, searchQuery);
						}}
						className='bg-sky-900 text-white rounded-md p-4 w-full'
					>
						Search
					</button>
				</div>
			</div>
		</div>
	);
};

export default SearchBox;
