import * as React from 'react';
import Link from 'next/link';

export default function ButtonAppBar() {
	return (
		<div className=' p-3 '>
			<div className='flex'>
				<div className='basis-1/4'>
					<Link href='/'>
						<a className='text-md'>LOGO  </a>
					</Link>
				</div>

				<div className='basis-3/4 text-right '>
					<Link href='/products/productsList/'>
						<a className='text-md'>ADVERTISEMENTS  </a>
					</Link>
				</div>
			</div>
		</div>
	);
}
