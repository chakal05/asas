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
		title: 'Hobbies',
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
		<div className='mx-2 p-2'>
			<p className=' text-xl mb-5 font-bold '> Discover our categories </p>
				<ul className=' grid grid-cols-4  md:flex md:justify-center my-3'>
					{categories.map((item) => {
						return (
							<li key={item.id} className='m-1'>
								{/**
								 * When clicked on one of the categories item
								 * it should trigger an api call
								 */}
								<div className='text-center'>
									<button onClick={() => {}}>
										<FontAwesomeIcon
											className='w-full'
											icon={item.icon}
											style={{ fontSize: 40, marginBottom: '3px' }}
										/>
										{item.title}
									</button>
								</div>
							</li>
						);
					})}
				</ul>
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
