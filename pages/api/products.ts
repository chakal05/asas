import middleware from '../../lib/mongo';
import { ObjectId } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';
import createRouter from 'next-connect';
import expressWrapper from 'next-connect';
import cors from 'cors';


// For picture handling
//import formidable from 'formidable';
// export const config = {
// 	api: {
// 		bodyParser: false // Disallow body parsing, consume as stream
// 	}
// };



const products = createRouter<NextApiRequest, NextApiResponse>();

products
	.use(expressWrapper(cors))
	.get(async (req, res) => {
		const client = await middleware;
		const db = client.db('asas');
		const { city, id, category, promoted, savedList } :any = req.query ;

		let result;

		if (city) {
			if (city === 'All over Djibouti')
				result = await db.collection('products').find({}).toArray();
			else result = await db.collection('products').find({ city }).toArray();
		}

		if (savedList) {
			const user = await db
				.collection('saved')
				.find({ user: new ObjectId(savedList) })
				.toArray();

			if (user[0]) {
				const { saved } = user[0];
				let newArr: any = [];

				for (let index = 0; index < saved.length; index++) {
					const element = saved[index];
					let f = await db.collection('products').findOne({
						_id: new ObjectId(element)
					});
					newArr.push(f);
				}
				result = newArr;
			} else {
				result = user;
			}
		}

		if (id)
			result = await db
				.collection('products')
				.findOne({ _id: new ObjectId(id) });

		if (category)
			result = await db.collection('products').find({ category }).toArray();

		if (promoted) {
			let dbRes = await db
				.collection('products')
				.find({ promoted: true })
				.toArray();

			result = dbRes.slice(0, 4);
		}

		res.json(result);
	})
	.post(async (req, res) => {
		const client = await middleware;
		const db = client.db('asas');

		const theRequest = JSON.parse(req.body);
		let { userId, saved, itemId } = theRequest;



		//todo -- Follow bug fix on formidable
		// const form = new formidable.IncomingForm();
		// //await JSON.parse(req.body);
		// form.uploadDir = './../../public/uploads';
		// form.keepExtensions = true;
		//form.parse(req, (err, fields, files) => {
			//console.log('fields & files', fields, files);

			//console.log(files);
			// res.send(err || 'Done');
			// console.log(files.file.filepath)
			// var oldPath = files.file.filepath;
			// var newPath = `./public/uploads/${files.file.originalFilename}`;
			// mv(oldPath, newPath, function(err) {
			// });
			// res.status(200).json({ fields, files })
			// });

			//?----------------------------------------


			if (saved) {
				// Check if user has saved items
				let result = await db
					.collection('saved')
					.find({
						user: new ObjectId(userId)
					})
					.toArray();

				if (result.length === 0) {
					// User has no saved items, create new list
					const toInsert = await db.collection('saved').insertOne({
						user: new ObjectId(userId),
						saved: [new ObjectId(saved)]
					});
					if (toInsert) return res.json({ data: 'Added to saved list' });
				} else {
					// First check if item is in the saved list
					let itemExists = await db
						.collection('saved')
						.find({
							saved: new ObjectId(saved)
						})
						.toArray();

					if (!itemExists.length) {
						// new item to add to the list
						const toUpdate = await db
							.collection('saved')
							.updateOne(
								{ user: new ObjectId(userId) },
								{ $push: { saved: new ObjectId(saved) } }
							);
						if (toUpdate) return res.json({ data: 'Added to saved list' });
					} else return res.json({ data: 'Item already saved' });
				}
			}

			if (itemId) {
				let toRemove = await db.collection('saved').updateOne(
					{ user: new ObjectId(userId) },
					{
						$pull: { saved: new ObjectId(itemId) }
					}
				);

				if (toRemove.modifiedCount === 1) res.json({ data: `Item ${itemId} deleted` });
			}

	});


export default products;
