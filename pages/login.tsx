import type { NextPage } from 'next';

const Login: NextPage = () => {
	return (
		<div className=' p-2 h-96 bg-slate-200 rounded  w-4/5 md:w-2/5 mx-auto text-center mt-24 mb-32 md:mt-28 md:mb-44   '>
			<div>
				<p className='font-bold text-2xl my-4'> Login </p>
			</div>

			<form className=''>
				<label className='block  '>
					<input
						type='text'
						placeholder='Email'
						className='border-2 p-2 my-2 w-4/5 font-bold rounded'
					/>
				</label>
				<label className='block my-4'>
					<input
						type='text'
						placeholder='Password'
						className='border-2 p-2 w-4/5  font-bold rounded '
					/>
				</label>

				<div className='my-5'>
					<button className='bg-slate-600 my-3 p-2 w-4/5 text-white   rounded'>
						{' '}
						Login{' '}
					</button>
					<button className='bg-slate-600 my-3 p-2 w-4/5  text-white   rounded'>
						{' '}
						Sign up{' '}
					</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
