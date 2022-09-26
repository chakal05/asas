import { InferGetServerSidePropsType } from 'next';
import { getProviders } from 'next-auth/react';
import BtnLogin from '../components/btnLogin';

const Login = ({
	providers
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	return (
		<div className='container'>
			<p>Not signed in </p>

			<BtnLogin provider={providers?.google} bgColor='#f2573f' />

			<BtnLogin provider={providers?.facebook} bgColor='#0404be' />
		</div>
	);
};

export const getServerSideProps = async (context) => {
	const providers = await getProviders();
	return {
		props: { providers }
	};
};

export default Login;
