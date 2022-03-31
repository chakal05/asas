import * as React from 'react';
import Link from 'next/link';

export default function Header() {
	return (
		<div className=' p-3  '>
			<div className='flex'>
				<div className=' flex-none w-20'>
					<Link href='/'>
						<a className='text-md font-bold'> ASAS </a>
					</Link>
				</div>

				<div className='grow text-right'>
					<button className='  bg-slate-600 px-2 rounded invisible lg:visible text-white  '>
						{' '}
						PLACE AD{' '}
					</button>

					<Link href='/products/productsList/'>
						<a className='text-sm mx-1 '>ADVERTS </a>
					</Link>
					<Link href='/products/productsList/'>
						<a className='text-sm mx-1 '>SAVED </a>
					</Link>
					<Link href='/products/productsList/'>
						<a className='text-sm mx-1 '>MESSAGES </a>
					</Link>
					<Link href='/products/productsList/'>
						<a className='text-sm mr-1 '>LOGIN </a>
					</Link>
				</div>
			</div>
		</div>
	);
}
