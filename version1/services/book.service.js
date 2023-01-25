const Book = require("../models/Book");

const getBookService = async (filters, queries) => {
	// const product = await Product.find({ status: { $ne: "out-of-stock" } });
	// const product = await Product.find({}).sort({ price: 1 });

	// http://localhost:5000/api/v1/product?sort=price,quantity
	// const product = await Product.find({}).sort(queries.sortBy);

	// http://localhost:5000/api/v1/product?sort=price,quantity&fields=name,description

	const { skip, limit, fields, sortBy } = queries;

	const books = await Book.find(filters)
		.skip(skip)
		.limit(limit)
		.select(fields)
		.sort(sortBy);

	const totalBooks = await Book.countDocuments(filters);
	const pageCount = Math.ceil(totalBooks / limit);

	return { totalBooks, pageCount, books };
};

const getBookServiceById = async id => {
	const book = await Book.findById({ _id: id });
	return book;
};

const createBookService = async data => {
	const book = await Book.create(data);
	return book;
};

const updateBookByIdService = async (id, data) => {
	console.log(id, data);
	const book = await Book.findOne({ _id: id });
	const result = await book.set(data).save();
	return result;
};

const deleteBookByIdService = async id => {
	const result = await Book.deleteOne({ _id: id });
	return result;
};

module.exports = {
	createBookService,
	getBookService,
	getBookServiceById,
	updateBookByIdService,
	deleteBookByIdService,
};
