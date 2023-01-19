const Book = require("../models/Book");

const getBookService = async (filters, queries) => {
	// const product = await Product.find({ status: { $ne: "out-of-stock" } });
	// const product = await Product.find({}).sort({ price: 1 });

	// http://localhost:5000/api/v1/product?sort=price,quantity
	// const product = await Product.find({}).sort(queries.sortBy);

	// http://localhost:5000/api/v1/product?sort=price,quantity&fields=name,description

	const { skip, limit, fields, sortBy } = queries;

	const products = await Product.find(filters)
		.skip(skip)
		.limit(limit)
		.select(fields)
		.sort(sortBy);

	const totalProducts = await Product.countDocuments(filters);
	const pageCount = Math.ceil(totalProducts / limit);

	return { totalProducts, pageCount, products };
};

const createBookService = async data => {
	const book = await Book.create(data);

	return book;
};

module.exports = { createBookService };
