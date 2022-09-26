import { InferGetServerSidePropsType } from 'next/types';
import { getSavedList, removeFromSaved } from '../utils/productsApiCalls';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import Link from 'next/link';
const Saved = ({
	products
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const session:any = useSession();
	const [theList, setTheList] = useState(products);

	if (session.status === 'unauthenticated') {
		return (
			<div className='p-4'>
				{' '}
				<p className='font-bold text-sky-900 '> You need to login first to see this page </p>{' '}
			</div>
		);
	}

	return (
		<div className='p-3'>
			{!theList[0] && (
				<>
					<p> You do not have saved items yet </p>
				</>
			)}
			{theList[0] && (
				<>
					<div className='mt-9 '>
						<p className='font-bold text-3xl xl:text-4xl mb-8  text-sky-900'>
							{' '}
							Saved products{' '}
						</p>
					</div>
					<div className='overflow-x-auto relative shadow-md sm:rounded-lg'>
						<table className='w-full text-sm text-left text-gray-500 '>
							<thead className='text-xs text-gray-700 uppercase bg-gray-50 '>
								<tr>
									<th scope='col' className='py-3 px-6'>
										Product name
									</th>
									<th scope='col' className='py-3 px-6'>
										Image
									</th>
									<th scope='col' className='py-3 px-6'>
										Category
									</th>
									<th scope='col' className='py-3 px-6'>
										Price
									</th>
									<th scope='col' className='py-3 px-6'>
										Action
									</th>
								</tr>
							</thead>
							<tbody>
								{theList.map((item, index) => {
									return (
										<tr key={item._id} className='bg-white border-b '>
											<th
												scope='row'
												className='py-4 px-6 font-medium whitespace-nowrap '>
												{item.title}
											</th>
											<td className='py-4 px-5'>{item.city}</td>
											<td className='py-4 px-5'>{item.category}</td>
											<td className='py-4 px-5'>{item.price}</td>
											<td className='py-4 px-5'>
												<button
													className='border-2 border-red-600 text-red-600 px-1 hover:bg-red-600 hover:text-white '
													onClick={() => {
														let listCopy = [...theList];
														listCopy.splice(index, 1);
														setTheList(listCopy);
														removeFromSaved({
															userId: session.data?.user?.id,
															itemId: item._id
														});
													}}>
													{' '}
													Remove{' '}
												</button>
												<Link href={`productItem?id=${item._id}`}>
													<a className='border-2 p-1 ml-1 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white'>
														See more
													</a>
												</Link>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</>
			)}
		</div>
	);
};

export const getServerSideProps = async (context) => {
	const { savedList } = context.query;
	let products;
	console.log(savedList);
	if (savedList !== 'unauthenticated') products = await getSavedList(savedList);
	else products = [];

	return {
		props: { products }
	};
};

export default Saved;
