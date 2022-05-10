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
import { getByCategory } from '../utils/productsApiCalls';

const categories = [
	{
		icon: faCar,
		title: 'Car',
	},
	{
		icon: faBed,
		title: 'Furniture',
	},

	{
		icon: faShirt,
		title: 'Clothes',
	},
	{
		icon: faMobilePhone,
		title: 'Electronics',
	},
	{
		icon: faFutbol,
		title: 'Hobbies',
	},
	{
		icon: faBriefcase,
		title: 'Jobs',
	},
	{
		icon: faHome,
		title: 'Homes',
	},
];

type Props = {
	submitCategory: (title: string) => void;
};

const Categories: React.FC<Props> = ({ submitCategory }) => {
	return (
		<div className='mx-2 p-2'>
			<div className=''>
				<p className=' text-xl font-bold text-sky-900'>
					{' '}
					Discover our categories{' '}
				</p>
			</div>
			<ul className='grid grid-cols-4 gap-4 my-3 '>
				{categories.map((item, index) => {
					return (
						<li key={index} className='text-sm sm:text-lg'>
							<div className='text-center text-slate-700 '>
								<button
									onClick={() =>submitCategory(item.title)}
								>
									<FontAwesomeIcon
										className='w-full text-2xl sm:text-4xl mb-2 text-sky-900'
										icon={item.icon}
									/>
									{item.title}
								</button>
							</div>
						</li>
					);
				})}
				<li className='text-sm sm:text-lg'>
					<div className='text-center text-slate-700 '>
						<Link href={'/categories'}>
							<a>
								<FontAwesomeIcon
									className='w-full text-2xl sm:text-4xl mb-2 sm:mb-3 text-sky-900'
									icon={faLayerGroup}
								/>
								{'All'}
							</a>
						</Link>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default Categories;
