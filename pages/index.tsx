import React, { useContext, useEffect } from 'react';
import type { NextPage, GetStaticProps, GetStaticPropsContext } from 'next';

import { useSelector } from 'react-redux';
import Head from 'next/head';
import Image from 'next/image';
import { Container, Grid } from '@mui/material';

import styles from '../styles/Home.module.css';
import Search from '../components/search';

import { useAppSelector, useAppDispatch } from '../redux/hooks';

import { getProductsAsync } from '../features/productsSlice';

const Home: NextPage = () => {
	const dispatch = useAppDispatch();

	// TODO Add axios and cors policy

	useEffect(() => {
		//	const getData = () => {
		dispatch(getProductsAsync());
		//	};

		//	getData();
	});

	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Container>
				<Grid container>
					<Grid item xs={2} sm={9} md={6}>
						<Search />
					</Grid>
					<Grid item xs={2} sm={4} md={6}>
						<h1> Counter </h1>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};


export default Home;
