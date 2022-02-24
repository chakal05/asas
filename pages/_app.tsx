import '../styles/globals.css';
//import { AppProvider } from '../features/getProducts'

import { Provider } from 'react-redux';
import { store } from '../redux/store';

import type { AppProps } from 'next/app';
import { Container } from '@mui/material';
import Header from '../components/header';
import Footer from '../components/footer';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<div className='md:container'>
				<Header />
				<Component {...pageProps} />
				<Footer />
			</div>
		</Provider>
	);
}

export default MyApp;
