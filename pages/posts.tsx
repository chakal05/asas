import { useContext } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
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

import Search from '../components/search';
import { useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';
import { ProductType } from '../interfaces/index';
import filter from '../features/filter';

const Posts: NextPage = () => {
	// TODO Sort product according to btns

	const { filters } = useAppSelector((state: RootState) => state.filters);
	const { products } = useAppSelector((state: RootState) => state.produts);
	const filteredByName: ProductType[] = filter(products, filters);

	// products.filter((item) =>
	// 	item.title.toLowerCase().includes('men')
	// );

	const router = useRouter();
	const { city, product } = router.query;
	return (
		<Container>
			<Grid container>
				<Grid item xs={2} sm={9} md={12}>
					<Search />
				</Grid>
				<Grid item xs={2} sm={9} md={12}>
					<h1>
						{' '}
						{city} {product}{' '}
					</h1>
					{filteredByName.map((item) => {
						return (
							<Card sx={{ maxWidth: 345 }} key={item.id}>
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
									<Button size='small'>Share</Button>
									<Button size='small'>Learn More</Button>
								</CardActions>
							</Card>
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
