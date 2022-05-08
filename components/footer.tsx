
const Footer = () => {
	return (
		<div className='p-3 mt-9 '>
			<div className='w-full border-t border-slate-300'></div>
			<div className='flex justify-around text-slate-600'>
				<div className='py-3 pl-3 '>
					<p className='font-bold text-xl my-1 text-sky-900'> Asas </p>
					<ul>
						<li> About Asas</li>
						<li> Contact us</li>
						<li> Terms of use</li>
						<li>Personal data management</li>
						<li> Cookies</li>
					</ul>
				</div>

				<div className='text-right py-3 pr-3 '>
					<p className='font-bold text-xl my-1 text-sky-900'> For compagnies </p>
					<ul>
						<li> Manage store ads</li>
						<li> Store opening</li>
						<li> Login for stores</li>
						<li> Show affiliated store</li>
					</ul>
				</div>
			</div>
		</div>
	);
};


export default Footer;
