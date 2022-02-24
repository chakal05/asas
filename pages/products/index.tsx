import { useContext } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Container,
	Grid,
	Typography,
} from '@mui/material';

import Search from '../../components/search';
import { useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import { ProductType } from '../../interfaces/index';
import filter from '../../features/filter';

const Posts: NextPage = () => {
	// TODO Sort product according to btns

	const { filters } = useAppSelector((state: RootState) => state.filters);
	const { products } = useAppSelector((state: RootState) => state.produts);
	const filteredByName: ProductType[] = filter(products, { filters });

	return (
		<Container>
			<Grid container>
				<Grid item xs={12}>
					<Search />
				</Grid>
				<Grid item  xs={12} >
					<h1 className='text-3xl font-bold text-center my-7'>  {filteredByName.length} PRODUCTS </h1>
					{filteredByName.map((item) => {
						return (
							<Link
								href={{
									pathname: `/products/productItem`,
									query: {
										id: item.id,
										title: item.title,
										description: item.description,
										image: item.image,
									},
								}}
								passHref
								key={item.id}
							>
								<a>
									<Card sx={{ marginBottom:'1rem' }}>
										<CardMedia
											component='img'
											height='140'
											image={item.image}
											alt='green iguana'
										/>
										<CardContent>
											<Typography gutterBottom variant='h5' component='div'>
												{item.title}
											</Typography>
											<Typography variant='body2' color='text.secondary'>
												{item.description}
											</Typography>
										</CardContent>
										<CardActions>
											<Button size='small'>{item.city}</Button>
											<Button size='small'>Learn More </Button>
										</CardActions>
									</Card>
								</a>
							</Link>
						);
					})}
				</Grid>
			</Grid>
		</Container>
	);
};

// export const getStaticProps: GetStaticProps = () => {

// 	return {
// 		props
// 	}
// };

export default Posts;
