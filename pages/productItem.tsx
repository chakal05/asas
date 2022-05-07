import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import type { InferGetServerSidePropsType, NextPage } from 'next';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCircleChevronLeft,
	faCircleChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import Swipe from 'react-easy-swipe';

const ImageWrap = styled.span`
	box-sizing: content-box;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: '100%';
`;

const Product = ({
	product,
	sellerInfo,
	sameCategorie,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const { title, description, images, price } = product;
	const [currentSlide, setCurrentSlide] = useState(0);
	const nextSlide = () => {
		let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
		setCurrentSlide(newSlide);
	};

	const prevSlide = () => {
		let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
		setCurrentSlide(newSlide);
	};
	return (
		<div>
			<Head>
				<title> Sams - {title} </title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className='md:flex'>
				<div className=' mx-1 mt-1 md:basis-4/6 '>
					{/* <div className=' h-96 max-h-96 max-w-xl w-full overflow-hidden flex relative '>
						<button
							onClick={prevSlide}
							className='absolute left-3 text-3xl inset-y-1/2 cursor-pointer'
						>
							<FontAwesomeIcon icon={faCircleChevronLeft} />
						</button>
						<Swipe onSwipeLeft={nextSlide} onSwipeRight={prevSlide}>
							{images.map((img, index) => {
								return (
									<div
										key={index}
										className={index === currentSlide ? 'block' : 'hidden'}
									>
										<Image layout='fill' src={img} alt='' />
									</div>
								);
							})}
						</Swipe>
						<div className='absolute w-full flex justify-center bottom-0'>
							{images.map((element, index) => {
								return (
									<div
										className={
											index === currentSlide
												? 'h-2 w-2 bg-blue-700 rounded-full mx-2 mb-2 cursor-pointer'
												: 'h-2 w-2 bg-white rounded-full mx-2 mb-2 cursor-pointer'
										}
										key={index}
										onClick={() => {
											setCurrentSlide(index);
											let newSlide =
												currentSlide === images.length - 1
													? 0
													: currentSlide + 1;
											setCurrentSlide(newSlide);
										}}
									></div>
								);
							})}
						</div>
						<button
							onClick={nextSlide}
							className='absolute right-0 text-3xl inset-y-1/2 cursor-pointer'
						>
							<FontAwesomeIcon icon={faCircleChevronRight} />
						</button>
					</div> */}

					<div
						id='default-carousel'
						className='relative'
						//data-carousel='static'
					>
						{/* <!-- Carousel wrapper --> */}
						<div className='overflow-hidden  relative h-64 rounded-lg sm:h-72  xl:h-80 2xl:h-96'>
							{/* <!-- Item 1 --> */}
							<div
								className=' duration-700 ease-in-out'
								//	data-carousel-item
							>
								{images.map((img, index) => {
									return (
										<div
											key={index}
											className={index === currentSlide ? 'block ' : 'hidden'}
										>
											<Image layout='fill' objectFit='fill' src={img} alt='' />
										</div>

										//w-3/5 h-56 sm:h-64  xl:h-80 2xl:h-96

										// <img
										// 	src={images[0]}
										// 	key={index}
										// 	className='block  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 sm:h-64 sm:w-64 xl:h-80 xl:w-80 2xl:h-96 2xl:w-96'
										// />
									);
								})}

								{/* <img
									src={images[0]}
									className='block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2'
									alt='...'
								/> */}
							</div>
						</div>
						{/* <!-- Slider indicators --> */}
						<div className='flex absolute  bottom-3 left-1/2 z-30 space-x-3 -translate-x-1/2'>
							<p className='bg-slate-500 text-white py-1 px-3 rounded'>
								{' '}
								{currentSlide + 1} av{' '}
								{images.length}{' '}
							</p>

							{/* <button
								type='button'
								className='w-3 h-3 rounded-full'
								aria-current='false'
								aria-label='Slide 2'
								data-carousel-slide-to='1'
							></button>
							<button
								type='button'
								className='w-3 h-3 rounded-full'
								aria-current='false'
								aria-label='Slide 3'
								data-carousel-slide-to='2'
							></button> */}
						</div>
						{/* <!-- Slider controls --> */}
						<button
							type='button'
							className='flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none'
							onClick={prevSlide}
						>
							<span className='inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
								<svg
									className='w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M15 19l-7-7 7-7'
									></path>
								</svg>
								<span className='hidden'>Previous</span>
							</span>
						</button>
						<button
							type='button'
							className='flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none'
							onClick={nextSlide}
						>
							<span className='inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
								<svg
									className='w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M9 5l7 7-7 7'
									></path>
								</svg>
								<span className='hidden'>Next</span>
							</span>
						</button>
					</div>

					<div className='mt-7'>
						<div className='grid grid-cols-2 '>
							<div>
								<p className='text-2xl  '> {title} </p>
								<p className='my-3 font-bold text-xl '> {price} Fdj </p>
							</div>
							<div className='text-right '>
								<button className='bg-slate-600 text-white p-1 w-16 rounded '>
									{' '}
									SAVE{' '}
								</button>
							</div>
						</div>
						<div className=' my-5 w-full border-b border-gray-300'></div>
						<div className='my-8 lg:flex justify-between '>
							<p className='text-lg '>
								{' '}
								Published by :{' '}
								<span className='font-bold '>{sellerInfo.username}</span>
							</p>
							<p className='w-full'>
								{' '}
								Member since: <span> {sellerInfo.joined} </span>{' '}
							</p>

							<button className='mb-5 bg-slate-600 text-white w-full lg:w-40 rounded p-2'>
								{' '}
								SEND MESSAGE{' '}
							</button>
						</div>
						<div>
							<p className='font-bold text-lg '>
								{' '}
								Description : <br />{' '}
								<span className='font-thin'> {description}</span>{' '}
							</p>
						</div>
					</div>
				</div>

				<div className=' hidden md:block md:basis-2/6 md:ml-3  '>
					<div className='border-2 rounded-lg shadow-lg p-2'>
						<p className='font-bold text-center text-xl'>
							{' '}
							Browse job listings{' '}
						</p>
						<ul className='my-3 divide-y'>
							<li className=''>
								<p className='font-bold'>
									Lagerarbetare till långsiktigt projekt! - Möjlighet till
									resjobb!
								</p>
								<p className='text-slate-500 text-sm '>
									MTX Rekrytering & Bemanning ·{' '}
									<span className='text-cyan-500 font-bold'>
										{' '}
										31 dagar kvar{' '}
									</span>{' '}
								</p>
							</li>
							<li className=''>
								<p className='font-bold'>
									Lagerarbetare till långsiktigt projekt! - Möjlighet till
									resjobb!
								</p>
								<p className='text-slate-500 text-sm '>
									MTX Rekrytering & Bemanning ·{' '}
									<span className='text-cyan-500 font-bold'>
										{' '}
										31 dagar kvar{' '}
									</span>{' '}
								</p>
							</li>
						</ul>
						<button className='bg-slate-500 text-white p-2 w-full rounded-lg'>
							{' '}
							See more{' '}
						</button>
						<p className='text-5xl text-center  '> Sams Job </p>
					</div>
				</div>
			</div>
			<div className='bg-slate-50 mt-12 '>
				<p className='text-2xl p-3 font-bold'> Others also looked at </p>
				<ul className='grid grid-cols-2 gap-4 p-3 md:grid-cols-3 '>
					{sameCategorie.map((item, index) => {
						return (
							<li key={index} className=' bg-white shadow-lg rounded-lg'>
								<ImageWrap>
									<Image
										src={item.images[0]}
										width={150}
										height={150}
										alt='ds'
									/>
								</ImageWrap>
								<div className='p-1'>
									<p className='text-slate-600'> {item.city} </p>
									<p className='text-lg'> {item.title}</p>
									<p className='font-bold'> {item.price} </p>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export const getServerSideProps = async (context) => {
	const { id } = context.query;

	const res = await fetch(`http://localhost:3000/api/products/?id=${id}`);
	const product = await res.json();
	//JSON.parse(JSON.stringify(res));

	// get sellerId name
	const { sellerId, category } = product;
	const seller = await fetch(
		`http://localhost:3000/api/products/?sellerId=${sellerId}`
	);
	const sellerInfo = await seller.json();

	// get products of same categorie

	const productCategorie = await fetch(
		`http://localhost:3000/api/products/?category=${category}`
	);
	const sameCategorie = await productCategorie.json();

	return {
		props: { product, sellerInfo, sameCategorie },
	};
};

export default Product;
