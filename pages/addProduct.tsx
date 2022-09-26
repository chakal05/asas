import React, { useState } from 'react';
import { addProduct } from '../utils/productsApiCalls';

const cities = [
	'All over Djibouti',
	'Djibouti City',
	'Ali-Sabieh',
	'Dikhil',
	'Tadjoura',
	'Arta',
	'Obock'
];

const categories = ['Clothes', 'Electronics', 'Jewelery'];

const NewProduct = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [city, setCity] = useState(cities[0]);
	const [price, setPrice] = useState('');
	const [category, setCategory] = useState(categories[0]);
	const [images, setImages] = useState({});

	const handleSubmit = async (e) => {
		e.preventDefault();
		// list of uploaded images
		 const imgs = Array.from(images[0]);
		// let formData = new FormData();
		// formData.append('title', title);
		// formData.append('description', description);
		// imgs.map((file: any) => formData.append('file', file));

		const product = {
			title,
			description,
			city,
			price,
			category,
			imgs
		};

		// let v = new FormData();
		// v.append('data', imgs)

		// console.log(imgs)

		//if (title && description && city && price && category && images) {
			let res = await addProduct(imgs);
			console.log('response from addProduct api', await res);
		//}
	};

	return (
		<div className='p-2'>
			<div className='text-center mt-4'>
				<p className='text-4xl xl:text-4xl text-sky-900 font-bold  '>
					{' '}
					Add product{' '}
				</p>
			</div>
			<form
				encType='multipart/form-data'

				onSubmit={handleSubmit}
				className='border-2 p-3 m-[3rem] border-gray-300 rounded'>
				<div className='relative z-0 mb-6 w-full group'>
					<input
						type='text'
						name='title'
						id='title'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
						placeholder=' '
						required
					/>
					<label
						htmlFor='title'
						className='peer-focus:font-medium absolute text-sm text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
						Title
					</label>
				</div>
				<div className='relative z-0 mb-6 w-full group'>
					<label
						htmlFor='description'
						className='block mb-2 text-sm font-medium text-gray-900 '>
						Description
					</label>
					<textarea
						id='description'
						rows={4}
						value={description}
						required
						onChange={(e) => setDescription(e.target.value)}
						className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300'
						placeholder='Product description...'></textarea>
				</div>
				<div className='grid md:grid-cols-2 md:gap-6'>
					<div className='relative z-0 mb-6 w-full group'>
						<label
							htmlFor='category'
							className='peer-focus:font-medium absolute text-sm text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
							Category
						</label>
						<select
							value={category}
							onChange={(e) => setCategory(e.target.value)}
							className='block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none  focus:outline-none focus:ring-0 focus:border-gray-200 peer'
							placeholder=' '>
							{categories.map((option, index) => (
								<option key={index} value={option}>
									{option}
								</option>
							))}
						</select>
					</div>
					<div className='relative z-0 mb-6 w-full group'>
						<label
							htmlFor='city'
							className='peer-focus:font-medium absolute text-sm text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
							City
						</label>
						<select
							value={city}
							required
							onChange={(e) => setCity(e.target.value)}
							className='block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none  focus:outline-none focus:ring-0 focus:border-gray-200 peer'
							placeholder=' '>
							{cities.map((option, index) => (
								<option key={index} value={option}>
									{option}
								</option>
							))}
						</select>
					</div>
				</div>

				<div className='relative z-0 mb-6 w-full group'>
					<input
						type='text'
						name='price'
						id='price'
						value={price}
						onChange={(e) => setPrice(e.target.value)}
						className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
						placeholder=' '
					/>
					<label
						htmlFor='price'
						className='peer-focus:font-medium absolute text-sm text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
						Price
					</label>
				</div>

				<div className='relative z-0 mb-6 w-full group'>
					<label
						className='block mb-2 text-sm font-medium text-gray-900 '
						htmlFor='images'>
						Upload file
					</label>
					<input
						className='block w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-900 cursor-pointer focus:outline-none '
						aria-describedby='user_avatar_help'
						id='images'
						type='file'
						name='theFiles'
						multiple
						required
						onChange={(e) => setImages([e.target.files])}
					/>
					<div className='mt-1 text-sm' id='user_avatar_help'>
						Upload images to show the product
					</div>
				</div>

				<button
					type='submit'
					className='text-white bg-sky-900 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-sky-900 dark:hover:bg-sky-800 dark:focus:ring-sky-800'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default NewProduct;
