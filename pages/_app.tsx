import '@fortawesome/fontawesome-svg-core/styles.css'; // import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';

//todo: do you really need redux?

import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../redux/store';
//
//import Provider  from 'next-auth';
import type { AppProps } from 'next/app';
import Header from '../components/header';
import Footer from '../components/footer';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	return (
		<SessionProvider session={session}>
			<ReduxProvider store={store}>
				<div className='font-serif bg-slate-50'>
					<Header />
					<div className='lg:container '>
						<Component {...pageProps} />
					</div>
					<Footer />
				</div>
			</ReduxProvider>
		</SessionProvider>
	);
}

export default MyApp;
