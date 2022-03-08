import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Search from '../components/search';
import { useAppDispatch } from '../redux/hooks';
import { getProductsAsync } from '../features/productsSlice';

// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import the icons you need
import {
	faSearch,
	faAmbulance,
	faAnchor,
	faCar,
	faHome,
	faBriefcase,
	faMobilePhone,
	faFutbol,
	faBed,
	faDrum,
	faShirt,
} from '@fortawesome/free-solid-svg-icons';

const categories = [
	{
		id: 1,
		icon: faCar,
		title: 'Car',
	},
	{
		id: 2,
		icon: faBed,
		title: 'Furniture',
	},

	{
		id: 4,
		icon: faShirt,
		title: 'Clothes',
	},
	{
		id: 5,
		icon: faMobilePhone,
		title: 'Electronics',
	},
	{
		id: 6,
		icon: faFutbol,
		title: 'Sport & hobbies',
	},
	{
		id: 7,
		icon: faBriefcase,
		title: 'Jobs',
	},
	{
		id: 3,
		icon: faHome,
		title: 'Homes',
	},
];

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
					<div className=''>
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

			<div className='mx-2 mt-12 p-2'>
				<p className=' text-xl font-bold '> Discover our categories </p>
				<div className=''>
					<ul className=' md:flex justify-center my-3'>
						{categories.map((item) => {
							return (
								<li key={item.id} className='m-5 text-center '>
									<Link href='#' passHref>
										<div>
											<a href='#' className='flex flex-col'>
												<FontAwesomeIcon
													icon={item.icon}
													style={{ fontSize: 50, marginBottom: '5px' }}
												/>
												{item.title}
											</a>
										</div>
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
				<p className=' text-xl font-thin text-right '>
					<a href='#' className='underline hover:underline-offset-4'>
						{' '}
						Toutes nos categories{' '}
					</a>
				</p>
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
