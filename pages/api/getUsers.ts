import { NextApiRequest, NextApiResponse } from 'next';
import middleware from '../../lib/mongo';
import { ObjectId } from 'mongodb';

const getUsers = async (req: NextApiRequest, res: NextApiResponse) => {
	const client = await middleware;
	const db = client.db('asas');

	if (req.method === 'GET') {
		const { id } = req.query;
		let result;
		if (id) {
			result = await db.collection('users').findOne({ _id: id });
		}

		res.json(result);
	}
};

export default getUsers;
