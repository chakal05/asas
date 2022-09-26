import * as React from 'react';
import { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Header() {
	const [nav, setShowNav] = useState(false);
	const [logout, setLogout] = useState(false);
	const theSession = useSession();

	const links = [
		// {
		// 	label: 'Place ad',
		// 	url: '/addProduct'
		// },
		{
			label: 'Adverts',
			url: '/products?city=All+over+Djibouti&search='
		},
		{
			label: 'Saved',
			url: `/savedList/?savedList=${
				theSession?.data?.user?.id
					? theSession?.data?.user?.id
					: 'unauthenticated'
			}`
		}
	];

	const showNav = () => {
		let list = document.getElementById('mobile-menu');

		if (!nav) {
			list?.classList.remove('hidden');
			setShowNav(true);
		}

		if (nav) {
			list?.classList.add('hidden');
			setShowNav(false);
		}
	};

	const showLogout = () => {
		let dropdown = document.getElementById('dropdown');

		if (!logout) {
			dropdown?.classList.remove('hidden');
			setLogout(true);
		}

		if (logout) {
			dropdown?.classList.add('hidden');
			setLogout(false);
		}
	};

	return (
		<div>
			<div className='lg:container'>
				<nav className=' px-2 sm:px-4 py-2.5  '>
					<div className='flex flex-wrap justify-between items-center mx-auto'>
						<Link href='/'>
							<a className='flex items-center'>
								<span className='self-center text-sky-900  text-2xl font-semibold whitespace-nowrap '>
									SamS
								</span>
							</a>
						</Link>
						<button
							data-collapse-toggle='mobile-menu'
							type='button'
							className='inline-flex border-2 items-center p-2 ml-3  rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 '
							aria-controls='mobile-menu'
							aria-expanded='false'
							onClick={showNav}>
							<span className='sr-only'>Open main menu</span>
							<FontAwesomeIcon icon={faBars} className='text-md' />
						</button>
						<div className='hidden w-full md:block md:w-auto' id='mobile-menu'>
							<ul className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
								{links.map((link, index) => {
									return (
										<li key={index}>
											<Link href={link.url} aria-current='page'>
												<a
													className='block p-2 text-lg font-bold text-sky-900 border-b border-gray-300 hover:bg-slate-200 md:hover:bg-transparent md:border-0 md:hover:underline md:hover:underline-offset-4 md:p-0 '
													>
													{link.label}
												</a>
											</Link>
										</li>
									);
								})}

								{theSession.status === 'unauthenticated' && (
									<li>
										<Link href={'/login'} aria-current='page'>
											<a
												className={
													'block p-2 text-lg font-bold text-sky-900 border-b border-gray-300 hover:bg-slate-200 md:hover:bg-sky-700  md:border-0 md:p-0 md:bg-sky-900 md:text-white md:px-5 md:rounded '
												}>
												Sign in
											</a>
										</Link>
									</li>
								)}
								{theSession.status === 'authenticated' && (
									<li>
										<button
											id='dropdownDefault'
											data-dropdown-toggle='dropdown'
											onClick={showLogout}
											className='inline-flex items-center text-center p-2 text-lg font-bold text-sky-900 border-b border-gray-300  hover:bg-slate-200 md:hover:bg-transparent md:border-2  md:rounded w-full md:w-18 md:p-0 md:px-3 md:-mt-[2px] md:border-sky-900 md:hover:bg-sky-900 md:hover:text-white'
											type='button'>
											{theSession?.data?.user?.name}
											<svg
												className='ml-2 w-4 h-4'
												aria-hidden='true'
												fill='none'
												stroke='currentColor'
												viewBox='0 0 24 24'
												xmlns='http://www.w3.org/2000/svg'>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth='2'
													d='M19 9l-7 7-7-7'></path>
											</svg>
										</button>

										<div
											id='dropdown'
											className='hidden z-10  bg-transparent rounded divide-y divide-gray-100 shadow '>
											<ul aria-labelledby='dropdownDefault'>
												<li className='border-b border-gray-300 hover:bg-slate-200 md:text-center'>
													<button
														className=' p-2 text-lg font-bold text-sky-900  md:py-[2px]  '
														onClick={() => signOut()}>
														Sign out
													</button>
												</li>
											</ul>
										</div>
									</li>
								)}
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
}

//<div className='w-full border-b mt-4 border-slate-300'></div>
