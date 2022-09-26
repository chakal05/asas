import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faMobilePhone,
	faShirt,
	faGem
} from '@fortawesome/free-solid-svg-icons';

const categories = [
	{
		icon: faShirt,
		title: 'Clothes'
	},
	{
		icon: faMobilePhone,
		title: 'Electronics'
	},
	{
		icon: faGem,
		title: 'Jewelery'
	}
];

type Props = {
	submitCategory: (title: string) => void;
};

const Categories: React.FC<Props> = ({ submitCategory }) => {
	return (
		<div className='mx-2 p-2'>
			<div className=''>
				<p className='font-bold text-3xl xl:text-4xl mb-8  text-sky-900'>
					{' '}
					Our current categories{' '}
				</p>
			</div>
			<ul className='flex justify-center my-3 '>
				{categories.map((item, index) => {
					return (
						<li key={index} className='text-sm sm:text-lg w-24 mx-3'>
							<div className='text-center text-slate-700 '>
								<button onClick={() => submitCategory(item.title)}>
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

			</ul>
		</div>
	);
};

export default Categories;
