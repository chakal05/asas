import middleware from '../../lib/mongo';
import { ObjectId } from 'mongodb';

const products = async (req, res) => {
	const client = await middleware;
	const db = client.db('asas');
	if (req.method === 'GET') {
		const { city, id, category, promoted } = req.query;

		let result;

		if (city) {
			if (city === 'All over Djibouti') {
				result = await db.collection('products').find({}).toArray();
			} else {
				result = await db.collection('products').find({ city }).toArray();
			}
		}

		if (id) {
			result = await db
				.collection('products')
				.findOne({ _id: new ObjectId(id) });
		}

		if (category) {
			result = await db.collection('products').find({ category }).toArray();
		}

		if (promoted) {
			let dbRes = await db
				.collection('products')
				.find({ promoted: true })
				.toArray();

			result = dbRes.slice(0, 4);
		}

		res.json(result);
	}
};
//	products = JSON.parse(JSON.stringify(products));

export default products;
