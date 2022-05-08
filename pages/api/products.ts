import middleware from '../../lib/mongo';
import { ObjectId } from 'mongodb';

const products = async (req, res) => {
	const client = await middleware;
	if (req.method === 'GET') {
		const { city, id, sellerId, category, promoted } = req.query;
		const db = client.db('asas');
		let result;
		if (city === 'All over Djibouti') {
			result = await db.collection('products').find({}).toArray();
		} else {
			result = await db.collection('products').find({ city }).toArray();
		}

		if (id) {
			result = await db.collection('products').findOne({ _id: new ObjectId(id) });
		}

		if (sellerId) {
			result = await db.collection('users').findOne({ _id: sellerId });
		}

		if (category) {
			result = await db.collection('products').find({ category }).toArray();
		}

		if (promoted) {
			let b = await db
				.collection('products')
				.find({ promoted: true })
				.toArray();

			result = b.slice(0,4)
		}

		res.json(result);
	}
};
//	products = JSON.parse(JSON.stringify(products));

export default products;
