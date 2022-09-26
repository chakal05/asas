import middleware from '../../lib/mongo';
import { ObjectId } from 'mongodb';

const getUsers = async (req, res) => {
	const client = await middleware;
	const db = client.db('asas');

	if (req.method === 'GET') {
		const { id } = req.query;

		let result = await db
			.collection('users')
			.findOne({ _id: new ObjectId(id) });

		if (result) return res.json(result);
		else {
			let empty = { message: 'Anonym' };
			return res.json(empty);
		}
	}
};

export default getUsers;
