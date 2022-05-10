import React, { useEffect } from 'react';
import type { NextPage, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Search from '../components/search';
import Categories from '../components/categories';
import { useAppDispatch } from '../redux/hooks';
import { filterByCategory } from '../store/filtersSlice';
// {
// 	products,
// }: InferGetServerSidePropsType<typeof getServerSideProps>

function Home() {
	const dispatch = useAppDispatch();
	const router = useRouter();

	return (
		<div>
			<Head>
				<title> Sams </title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className=''>
				<div className='my-9 md:w-4/5 mx-auto'>
					<p className='text-4xl xl:text-6xl text-sky-900 font-bold text-center '>
						{`Buy and sell on Djibouti's safest classified ads `}
					</p>
				</div>
				<div className=''>
					<Search
						submit={(city, search) => {
							router.push({
								pathname: '/products/',
								query: {
									city,
									search,
								},
							});
						}}
					/>
				</div>
			</div>

			<div className='my-8'>
				<Categories
					submitCategory={(category) => {
						dispatch(filterByCategory(category));
						const formatedString = category.toLowerCase();
						router.push({
							pathname: '/products/',
							query: { category: formatedString },
						});
					}}
				/>
			</div>

			<div className='my-9'>
				<p className='font-bold text-4xl my-8 text-center text-sky-900'>
					{' '}
					Our Services{' '}
				</p>
				<div className='md:flex flex-row px-3 md:px-0 '>
					<div className='bg-white  shadow-md p-3 my-5 md:my-0  '>
						<p className='font-bold text-xl text-sky-900'> Lorem Ipsum </p>
						<p className='text-slate-700'>
							{' '}
							Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit
							anim id est laborum.{' '}
						</p>
					</div>
					<div className='bg-white shadow-md  p-3 my-5 md:mx-3 md:my-0'>
						<p className='font-bold text-xl text-sky-900'> Lorem Ipsum </p>
						<p className='text-slate-700'>
							{' '}
							Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit
							anim id est laborum.{' '}
						</p>
					</div>
					<div className='bg-white shadow-md p-3 my-5 md:my-0'>
						<p className='font-bold text-xl text-sky-900'> Lorem Ipsum </p>
						<p className='text-slate-700'>
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
}

// export const getServerSideProps = async (context) => {
// 	const client = await middleware;
// 	const db = client.db('asas');
// 	let products = await db.collection('products').insert(fakeData);
// 	products = JSON.parse(JSON.stringify(products));
// 	return {
// 		props: { products },
// 	};
// };

export default Home;
