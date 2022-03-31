import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Search from '../components/search';
import Categories from '../components/categories';
import { useAppDispatch } from '../redux/hooks';
import { getProductsAsync } from '../features/productsSlice';


const Home: NextPage = () => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(getProductsAsync());
	});

	return (
		<div>
			<Head>
				<title> Sams </title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className='mt-3'>
				<div className='md:grid grid-cols-2'>
					<div>
						<Search />
					</div>

					<div className=' hidden text-center md:flex'>
						<p className='text-5xl font-bold   p-5 md:self-center '>
							{' '}
							{`Buy and sell on Djibouti's safest classified ads `}{' '}
						</p>
					</div>
				</div>
			</div>

			<div>
				<Categories/>
				</div>


			<div className='mt-16'>
				<p className='font-bold text-4xl my-8 text-center'> Our Services </p>
				<div className='md:flex flex-row '>
					<div className='border-2 shadow-md mx-5 my-5 p-3 '>
						<p className='font-bold text-xl'> Lorem Ipsum </p>
						<p>
							{' '}
							Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit
							anim id est laborum.{' '}
						</p>
					</div>
					<div className='border-2 shadow-md mx-5 my-5 p-3 '>
						<p className='font-bold text-xl'> Lorem Ipsum </p>
						<p>
							{' '}
							Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit
							anim id est laborum.{' '}
						</p>
					</div>
					<div className='border-2 shadow-md mx-5 my-5 p-3 '>
						<p className='font-bold text-xl'> Lorem Ipsum </p>
						<p>
							{' '}
							Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit
							anim id est laborum.{' '}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
