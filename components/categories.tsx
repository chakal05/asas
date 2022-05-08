import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCar,
	faHome,
	faBriefcase,
	faMobilePhone,
	faFutbol,
	faBed,
	faLayerGroup,
	faShirt,
} from '@fortawesome/free-solid-svg-icons';

const categories = [
	{
		icon: faCar,
		title: 'Car',
		path: '',
	},
	{
		icon: faBed,
		title: 'Furniture',
		path: '',
	},

	{
		icon: faShirt,
		title: 'Clothes',
		path: '',
	},
	{
		icon: faMobilePhone,
		title: 'Electronics',
		path: '',
	},
	{
		icon: faFutbol,
		title: 'Hobbies',
		path: '',
	},
	{
		icon: faBriefcase,
		title: 'Jobs',
		path: '',
	},
	{
		icon: faHome,
		title: 'Homes',
		path: '',
	},
	{
		icon: faLayerGroup,
		title: 'All categories',
		path: '/categories',
	},
];

const Categories = () => {
	return (
		<div className='mx-2 p-2'>
			<div className=''>
				<p className=' text-xl font-bold text-sky-900'>
					{' '}
					Discover our categories{' '}
				</p>
			</div>
			<ul className=' grid grid-cols-4  md:flex md:justify-center mt-5'>
				{categories.map((item, index) => {
					return (
						<li key={index} className='m-1'>
							<div className='text-center text-slate-700 '>
								<Link
									href={
										item.title === 'All categories'
											? item.path
											: `/products/?category=${item.title.toLowerCase()}`
									}
									passHref

								>
									<a>
										<FontAwesomeIcon
											className='w-full text-4xl mb-2 text-sky-900'
											icon={item.icon}
										/>
										{item.title}
									</a>
								</Link>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Categories;
