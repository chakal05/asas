import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import '../styles/globals.css';

import { Provider } from 'react-redux';
import { store } from '../redux/store';


import type { AppProps } from 'next/app';
import Header from '../components/header';
import Footer from '../components/footer';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<div className="">
			<div className='container '>
				<Header />
				<Component {...pageProps} />
				<Footer />
			</div>
			</div>
		</Provider>
	);
}

export default MyApp;
