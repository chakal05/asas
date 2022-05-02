import * as React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const links = [
	{
		label: 'Place ad',
		url: '/',
	},
	{
		label: 'Adverts',
		url: '/',
	},
	{
		label: 'Saved',
		url: '/',
	},
	{
		label: 'Messages',
		url: '/',
	},
	{
		label: 'Login',
		url: '/',
	},
];

export default function Header() {
	const [show, setShow] = useState(false);

	const showNav = () => {
		let list = document.getElementById('mobile-menu');

		if (!show) {
			list?.classList.remove('hidden');
			setShow(true);
		}

		if (show) {
			list?.classList.add('hidden');
			setShow(false);
		}
	};
	return (
		<div>
			<nav className=' border-gray-200 px-2 sm:px-4 py-2.5 rounded '>
				<div className='flex flex-wrap justify-between items-center mx-auto'>
					<Link href='/'>
						<a className='flex items-center'>
							<span className='self-center text-xl font-semibold whitespace-nowrap '>
								kasal
							</span>
						</a>
					</Link>
					<button
						data-collapse-toggle='mobile-menu'
						type='button'
						className='inline-flex border-2 items-center p-2 ml-3  rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 '
						aria-controls='mobile-menu'
						aria-expanded='false'
						onClick={showNav}
					>
						<span className='sr-only'>Open main menu</span>
						<FontAwesomeIcon icon={faBars} className='text-md' />
					</button>
					<div className='hidden w-full md:block md:w-auto' id='mobile-menu'>
						<ul className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
							{links.map((link, index) => {
								return (
									<li key={index}>
										<Link href={link.url} aria-current='page'>
											<a className='block py-2 pr-4 pl-3 text-lg text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 '>
												{link.label}
											</a>
										</Link>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

//<div className='w-full border-b mt-4 border-slate-300'></div>
