import {signIn} from 'next-auth/react';
const BtnLogin = ({provider, bgColor }) => {
	return <>
        <button
        style={{background: `${bgColor}`}}
        onClick={() => signIn(provider.id, {
            callbackUrl: `${window.location.origin}`,
        })}
        className='my-3 p-2 w-4/5 text-white rounded'
        > Sign in with {provider.name}  </button>
    </>;
};

export default BtnLogin;
