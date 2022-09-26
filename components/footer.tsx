import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
	return (
		<div className='p-3 my-9 '>
			<div className='w-full border-t border-slate-300'></div>
			<div className='flex justify-around text-slate-600'>
				<p className='p-5 text-xl'>
					<FontAwesomeIcon icon={faCopyright} className='text-md' />
					<span> {new Date().getFullYear()} SamS</span>
				</p>
			</div>
		</div>
	);
};

export default Footer;
