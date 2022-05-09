import { ProductType } from '../interfaces';
// const { connectToDatabase } = require('../../db/mongo');
// const ObjectId = require('mongodb').ObjectId;

const fakeData = [
	{
		category: "clothes",
		description:
			'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
		images: [
			'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
			'http://ecx.images-amazon.com/images/I/51i1Xy1BxHL._SL75_.jpg',
			'http://ecx.images-amazon.com/images/I/41kXCp%2BUyeL._SL160_.jpg',
		],
		city: 'Djibouti City',
		added: '2022-03-12',
		sellerId: '624706557e53beb38dae2af3',
		price: 3030,
		stock: 1,
		promoted: false,
		title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
	},
	{
		category: "clothes",
		description:
			'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',

		images: [
			'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
			'http://ecx.images-amazon.com/images/I/51i1Xy1BxHL._SL75_.jpg',
			'http://ecx.images-amazon.com/images/I/41kXCp%2BUyeL._SL160_.jpg',
		],
		city: 'Djibouti City',
		added: '2022-03-04',
		sellerId: '624706557e53beb38dae2af3',
		price: 2235,
		stock: 3,
		promoted: false,
		title: 'Mens Casual Premium Slim Fit T-Shirts ',
	},
	{
		category: "clothes",
		description:
			'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',

		images: [
			'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
			'http://ecx.images-amazon.com/images/I/51i1Xy1BxHL._SL75_.jpg',
			'http://ecx.images-amazon.com/images/I/41kXCp%2BUyeL._SL160_.jpg',
		],
		city: 'Djibouti City',
		promoted: true,
		added: '2022-03-05',
		sellerId: '624706557e53beb38dae2af3',
		price: 5599,
		stock: 2,
		title: 'Mens Cotton Jacket',
	},
	{
		category: "clothes",
		description:
			'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',

		images: [
			'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
			'http://ecx.images-amazon.com/images/I/51i1Xy1BxHL._SL75_.jpg',
			'http://ecx.images-amazon.com/images/I/41kXCp%2BUyeL._SL160_.jpg',
		],
		city: 'Ali-Sabieh',
		added: '2022-03-18',
		sellerId: '624706557e53beb38dae2af3',
		price: 1596,
		stock: 1,
		promoted: false,
		title: 'Mens Casual Slim Fit',
	},
	{
		category: 'jewelery',
		description:
			"From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",

		images: [
			'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
			'http://ecx.images-amazon.com/images/I/51i1Xy1BxHL._SL75_.jpg',
			'http://ecx.images-amazon.com/images/I/41kXCp%2BUyeL._SL160_.jpg',
		],
		city: 'Ali-Sabieh',
		promoted: false,
		added: '2022-03-09',
		sellerId: '624706557e53beb38dae2af3',
		price: 1695,
		stock: 5,
		title:
			"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
	},
	{
		category: 'jewelery',
		description:
			'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
		promoted: false,
		images: [
			'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
			'http://ecx.images-amazon.com/images/I/51i1Xy1BxHL._SL75_.jpg',
			'http://ecx.images-amazon.com/images/I/41kXCp%2BUyeL._SL160_.jpg',
		],
		city: 'Ali-Sabieh',
		added: '2022-03-12',
		sellerId: '624709117e53beb38dae2af4',
		price: 1680,
		stock: 1,
		title: 'Solid Gold Petite Micropave ',
	},
	{
		category: 'jewelery',
		description:
			"Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",

		images: [
			'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
			'http://ecx.images-amazon.com/images/I/51i1Xy1BxHL._SL75_.jpg',
			'http://ecx.images-amazon.com/images/I/41kXCp%2BUyeL._SL160_.jpg',
		],
		promoted: true,
		city: 'Dikhil',
		added: '2022-03-04',
		sellerId: '624709117e53beb38dae2af4',
		price: 9990,
		stock: 4,
		title: 'White Gold Plated Princess',
	},
	{
		category: 'jewelery',
		description:
			'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel',
		promoted: false,
		images: [
			'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
			'http://ecx.images-amazon.com/images/I/51i1Xy1BxHL._SL75_.jpg',
			'http://ecx.images-amazon.com/images/I/41kXCp%2BUyeL._SL160_.jpg',
		],
		city: 'Dikhil',
		added: '2022-03-29',
		sellerId: '624709117e53beb38dae2af4',
		price: 1099,
		stock: 2,
		title: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
	},
	{
		category: 'electronics',
		description:
			'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system',

		images: [
			'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
			'http://ecx.images-amazon.com/images/I/51i1Xy1BxHL._SL75_.jpg',
			'http://ecx.images-amazon.com/images/I/41kXCp%2BUyeL._SL160_.jpg',
		],
		city: 'Dikhil',
		added: '2022-02-12',
		sellerId: '624709117e53beb38dae2af4',
		price: 6400,
		stock: 6,
		promoted: false,
		title: 'WD 2TB Elements Portable External Hard Drive - USB 3.0 ',
	},
	{
		category: 'electronics',
		description:
			'Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)',

		images: [
			'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
			'http://ecx.images-amazon.com/images/I/51i1Xy1BxHL._SL75_.jpg',
			'http://ecx.images-amazon.com/images/I/41kXCp%2BUyeL._SL160_.jpg',
		],
		city: 'Obock',
		added: '2022-02-02',
		sellerId: '624709117e53beb38dae2af4',
		price: 1090,
		stock: 1,
		promoted: true,
		title: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
	},
	{
		category: 'electronics',
		description:
			'3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.',

		images: [
			'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
			'http://ecx.images-amazon.com/images/I/51i1Xy1BxHL._SL75_.jpg',
			'http://ecx.images-amazon.com/images/I/41kXCp%2BUyeL._SL160_.jpg',
		],
		city: 'Obock',
		added: '2022-02-19',
		sellerId: '6247096f7e53beb38dae2af5',
		price: 1090,
		stock: 3,
		promoted: false,
		title:
			'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',
	},
	{
		category: 'electronics',
		description:
			"Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",

		images: [
			'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg',
			'http://ecx.images-amazon.com/images/I/51i1Xy1BxHL._SL75_.jpg',
			'http://ecx.images-amazon.com/images/I/41kXCp%2BUyeL._SL160_.jpg',
		],
		city: 'Obock',
		added: '2022-02-02',
		sellerId: '6247096f7e53beb38dae2af5',
		price: 1140,
		promoted: true,
		stock: 5,
		title:
			'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive',
	},
	{
		category: 'electronics',
		description:
			'21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz',

		images: [
			'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
			'http://ecx.images-amazon.com/images/I/51i1Xy1BxHL._SL75_.jpg',
			'http://ecx.images-amazon.com/images/I/41kXCp%2BUyeL._SL160_.jpg',
		],
		city: 'Tadjoura',
		added: '2022-01-22',
		sellerId: '6247096f7e53beb38dae2af5',
		price: 5990,
		promoted: false,
		stock: 2,
		title: 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
	},
	{
		category: 'electronics',
		description:
			'49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag',

		images: [
			'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
			'http://ecx.images-amazon.com/images/I/51i1Xy1BxHL._SL75_.jpg',
			'http://ecx.images-amazon.com/images/I/41kXCp%2BUyeL._SL160_.jpg',
		],
		city: 'Tadjoura',
		promoted: true,
		added: '2022-02-24',
		sellerId: '6247096f7e53beb38dae2af5',
		price: 9999,
		stock: 12,
		title:
			'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ',
	},
	{
		category: "clothes",
		description:
			'Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates',
		promoted: false,
		images: [
			'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg',
			'http://ecx.images-amazon.com/images/I/51i1Xy1BxHL._SL75_.jpg',
			'http://ecx.images-amazon.com/images/I/41kXCp%2BUyeL._SL160_.jpg',
		],
		city: 'Tadjoura',
		added: '2022-01-13',
		sellerId: '6247096f7e53beb38dae2af5',
		price: 5699,
		stock: 4,
		title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
	},
	{
		category: "clothes",
		description:
			'100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON',

		images: [
			'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
			'http://ecx.images-amazon.com/images/I/51i1Xy1BxHL._SL75_.jpg',
			'http://ecx.images-amazon.com/images/I/41kXCp%2BUyeL._SL160_.jpg',
		],
		city: 'Arta',
		added: '2022-02-27',
		sellerId: '62470a417e53beb38dae2af6',
		price: 2995,
		stock: 1,
		promoted: false,
		title:
			"Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
	},
	{
		category: "clothes",
		description:
			"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",

		images: [
			'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
			'http://ecx.images-amazon.com/images/I/51i1Xy1BxHL._SL75_.jpg',
			'http://ecx.images-amazon.com/images/I/41kXCp%2BUyeL._SL160_.jpg',
		],
		price: 3999,
		stock: 3,
		city: 'Arta',
		promoted: false,
		added: '2022-02-11',
		sellerId: '62470a417e53beb38dae2af6',
		title: 'Rain Jacket Women Windbreaker Striped Climbing Raincoats',
	},
	{
		category: "clothes",
		description:
			'95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem',

		images: [
			'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
			'http://ecx.images-amazon.com/images/I/51i1Xy1BxHL._SL75_.jpg',
			'http://ecx.images-amazon.com/images/I/41kXCp%2BUyeL._SL160_.jpg',
		],
		city: 'Arta',
		added: '2022-01-06',
		sellerId: '62470a417e53beb38dae2af6',
		price: 9985,
		stock: 1,
		promoted: true,
		title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
	},
	{
		category: "clothes",
		description:
			'100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort',

		images: [
			'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
			'http://ecx.images-amazon.com/images/I/51i1Xy1BxHL._SL75_.jpg',
			'http://ecx.images-amazon.com/images/I/41kXCp%2BUyeL._SL160_.jpg',
		],
		city: 'Ali-Sabieh',
		added: '2022-01-26',
		sellerId: '62470a417e53beb38dae2af6',
		price: 7095,
		promoted: false,
		stock: 2,
		title: "Opna Women's Short Sleeve Moisture",
	},
	{
		category: "clothes",
		description:
			'95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.',
		images: [
			'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
			'http://ecx.images-amazon.com/images/I/51i1Xy1BxHL._SL75_.jpg',
			'http://ecx.images-amazon.com/images/I/41kXCp%2BUyeL._SL160_.jpg',
		],
		city: 'Djibouti City',
		added: '2022-01-17',
		sellerId: '62470a417e53beb38dae2af6',
		price: 1299,
		stock: 1,
		promoted: true,
		title: 'DANVOUY Womens T Shirt Casual Cotton Short',
	},
];

const resData = (req, res) => {
	res.status(200).json(fakeData);
};

export default resData;
