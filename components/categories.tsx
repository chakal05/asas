import Link from 'next/link';
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import the icons you need
import {
	faCar,
	faHome,
	faBriefcase,
	faMobilePhone,
	faFutbol,
	faBed,
	//	faDrum,
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

const Categories = () => {
	return (
		<div className='mx-2 mt-12 p-2'>
			<p className=' text-xl font-bold '> Discover our categories </p>
			<div className=''>
				<ul className=' grid grid-cols-4  md:flex md:justify-center my-3'>
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
					Browse all categories{' '}
				</a>
			</p>
		</div>
	);
};

export default Categories;
