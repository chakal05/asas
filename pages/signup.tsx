import react, { useState } from 'react';
import type { NextPage } from 'next';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { setEnv } from '../utils/sharedFeatures';

const Signup: NextPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dev = setEnv();

	const onFormSubmit = async (e) => {
		e.preventDefault();

		//Validation
		if (!email || !password) {
			alert('Invalid details');
			return;
		}
		//POST form values
		const res = await fetch(`/api/auth/signup`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: email,
				password: password
			})
		});
		//Await for data for any desirable next steps
		const data = await res.json();

		if (data.status === 200) signIn();
		console.log(data);
	};

	return (
		<div>
			<div className=' p-2 h-96 bg-slate-200 rounded  w-4/5 md:w-2/5 mx-auto text-center mt-24 mb-32 md:mt-28 md:mb-44   '>
				<div>
					<p className='font-bold  text-2xl my-4'> Sign up </p>
					<p>
						Have already an account?
						<Link href='/login'>
							<a className='text-sky-900 '> Login </a>
						</Link>{' '}
					</p>{' '}
				</div>

				<form className=''>
					<label className='block  '>
						<input
							type='email'
							placeholder='Email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className='border-2 p-2 my-2 w-4/5 font-bold rounded'
						/>
					</label>
					<label className='block my-4'>
						<input
							type='password'
							placeholder='Password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className='border-2 p-2 w-4/5 font-bold rounded '
						/>
					</label>

					<div className='my-5'>
						<button
							onClick={onFormSubmit}
							className='bg-sky-900 my-3 p-2 w-4/5  text-white   rounded'>
							{' '}
							Sign up{' '}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Signup;
