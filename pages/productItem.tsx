import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import type { InferGetServerSidePropsType, NextPage } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCircleChevronLeft,
	faCircleChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

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
				<div className='bg-white  shadow-lg rounded-lg border-2 mx-1 mt-1 md:basis-4/6 '>
					<div id='default-carousel' className='relative'>
						<div className='overflow-hidden relative rounded-lg  h-[16rem] w-10/12 sm:w-9/12  sm:h-72 xl:h-80 2xl:h-96 mx-auto'>
							<div className=' duration-700 ease-in-out '>
								{images.map((img, index) => {
									return (
										<div
											key={index}
											className={index === currentSlide ? 'block ' : 'hidden'}
										>
											<Image layout='fill' src={img} alt='' />
										</div>
									);
								})}
							</div>
						</div>
						<div className='flex absolute  bottom-3 left-1/2 z-30 space-x-3 -translate-x-1/2'>
							<p className='bg-sky-900 text-white py-1 px-3 rounded'>
								{' '}
								{currentSlide + 1} av {images.length}{' '}
							</p>
						</div>
						<button
							type='button'
							className='flex absolute  top-0 left-0 z-30 justify-center items-center px-1 h-full cursor-pointer group focus:outline-none'
							onClick={prevSlide}
						>
							<span className='inline-flex justify-center items-center  '>
								<FontAwesomeIcon
									className='w-6 h-6  sm:w-8 sm:h-8 text-sky-900 '
									icon={faCircleChevronLeft}
								/>
							</span>
						</button>
						<button
							type='button'
							className='flex absolute top-0  right-0 z-30 justify-center items-center px-1 h-full cursor-pointer group focus:outline-none'
							onClick={nextSlide}
						>
							<span className='inline-flex justify-center items-center '>
								<FontAwesomeIcon
									className='w-6 h-6  sm:w-8 sm:h-8 text-sky-900'
									icon={faCircleChevronRight}
								/>
							</span>
						</button>
					</div>

					<div className='mt-2'>
						<div className='grid grid-cols-2 p-3 '>
							<div>
								<p className='text-2xl text-sky-900 '> {title} </p>
								<p className='my-3 font-bold text-xl text-sky-900  '>
									{' '}
									{price} Fdj{' '}
								</p>
							</div>
							<div className='text-right '>
								<button className='bg-sky-900 text-white p-1 w-16 rounded '>
									{' '}
									SAVE{' '}
								</button>
							</div>
						</div>
						<div className=' my-1 w-full  border-b border-gray-300'></div>
						<div className='my-2 lg:flex p-3 justify-between '>
							<div>
								<p className='text-lg text-slate-700 '>
									{' '}
									Published by :{' '}
									<span className='font-bold text-sky-900  '>
										{sellerInfo.username}
									</span>
								</p>
								<p className='w-full text-slate-700 '>
									{' '}
									Member since:{' '}
									<span className='text-sky-900 font-bold ml-2'>
										{' '}
										{sellerInfo.joined}{' '}
									</span>{' '}
								</p>
							</div>

							<button className=' mt-3 lg:mt-0 bg-sky-900 text-white w-full lg:w-40 rounded p-2'>
								{' '}
								SEND MESSAGE{' '}
							</button>
						</div>
						<div className='p-3'>
							<p className='font-bold text-lg text-sky-900 '>
								{' '}
								Description : <br />{' '}
								<span className='font-thin text-slate-700 '>
									{' '}
									{description}
								</span>{' '}
							</p>
						</div>
					</div>
				</div>

				<div className=' hidden md:block md:basis-2/6  md:pt-1'>
					<div className='bg-white w-4/5 mx-auto border-2 rounded-lg shadow-lg p-2'>
						<p className='font-bold text-center text-xl text-sky-900'>
							{' '}
							Browse job listings{' '}
						</p>
						<ul className='my-3 divide-y'>
							<li className=''>
								<p className='font-bold text-slate-600'>
									Lagerarbetare till långsiktigt projekt! - Möjlighet till
									resjobb!
								</p>
								<p className='text-slate-500 text-sm '>
									MTX Rekrytering & Bemanning ·{' '}
									<span className='text-sky-500 font-bold'>
										{' '}
										31 dagar kvar{' '}
									</span>{' '}
								</p>
							</li>
							<li className=''>
								<p className='font-bold text-slate-600'>
									Lagerarbetare till långsiktigt projekt! - Möjlighet till
									resjobb!
								</p>
								<p className='text-slate-500 text-sm '>
									MTX Rekrytering & Bemanning ·{' '}
									<span className='text-sky-500 font-bold'>
										{' '}
										31 dagar kvar{' '}
									</span>{' '}
								</p>
							</li>
						</ul>
						<button className='bg-sky-900 my-3 text-white p-2 w-full rounded'>
							{' '}
							See more{' '}
						</button>
						<p className='text-5xl text-center text-sky-900  '> SamS Job </p>
					</div>
				</div>
			</div>
			<div className='bg-slate-50 mt-7'>
				<p className='text-2xl p-3 font-bold text-sky-900'>
					{' '}
					Others also looked at{' '}
				</p>
				<ul className='md:flex  '>
					{sameCategorie.map((item, index) => {
						return (
							<li
								key={index}
								className=' bg-white p-3 shadow-lg rounded-lg border-2  md:mx-3 my-3 mx-2'
							>
								<Link
									href={{
										pathname: `/productItem/`,
										query: {
											id: item._id,
										},
									}}
									passHref
								>
									<a>
										<div className='relative w-48 h-44 md:w-40 md:h-40  mx-auto '>
											<Image
												src={item.images[0]}
												layout='fill'
												objectFit='fill'
												alt='ds'
											/>
										</div>
										<div className='p-1'>
											<p className=' text-lg'> {item.city} </p>
											<p className='text-xl text-sky-900'> {item.title}</p>
											<p className='font-bold text-xl '> {item.price} FDj </p>
										</div>
									</a>
								</Link>
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

	let categorie = await productCategorie.json();
	const sameCategorie = categorie.slice(0,4);
	let b = [].slice(0,4)
	return {
		props: { product, sellerInfo, sameCategorie },
	};
};

export default Product;
