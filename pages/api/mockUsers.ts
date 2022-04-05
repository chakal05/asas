const users = [
	{
		_id: { $oid: '624706557e53beb38dae2af3' },
		name: 'Ahmed Hussein',
		joined: { $date: { $numberLong: '1606856400000' } },
		email: 'ahmed@gmail.com',
		password: 'ahmed123',
	},
	{
		_id: { $oid: '624709117e53beb38dae2af4' },
		name: 'Omar Ali',
		joined: { $date: { $numberLong: '1644872400000' } },
		email: 'omar@gmail.com',
		password: 'omar123',
	},
	{
		_id: { $oid: '6247096f7e53beb38dae2af5' },
		name: 'Amina Hassan',
		joined: { $date: { $numberLong: '1646600400000' } },
		email: 'amina@gmail.com',
		password: 'amina123',
	},
	{
		_id: { $oid: '62470a417e53beb38dae2af6' },
		name: 'Salah Amin',
		joined: { $date: { $numberLong: '1643835600000' } },
		email: 'salah@gmail.com',
		password: 'salah123',
	},
];

const resUsers = (req, res) => {
	res.status(200).json(users);
};

export default resUsers;
