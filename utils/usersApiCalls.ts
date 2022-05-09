import {setEnv} from './sharedFeatures';

const dev = setEnv();

const getUser = async (id: string) => {
	const res = await fetch(`${dev}/api/getUsers/?id=${id}`);
	const user = res.json();
	return user;
};

export { getUser };
