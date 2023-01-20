const Author = require("../models/Author");

const getAuthorService = async (filters, queries) => {
	// const product = await Product.find({ status: { $ne: "out-of-stock" } });
	// const product = await Product.find({}).sort({ price: 1 });

	// http://localhost:5000/api/v1/product?sort=price,quantity
	// const product = await Product.find({}).sort(queries.sortBy);

	// http://localhost:5000/api/v1/product?sort=price,quantity&fields=name,description

	const { skip, limit, fields, sortBy } = queries;

	const authors = await Author.find(filters)
		.skip(skip)
		.limit(limit)
		.select(fields)
		.sort(sortBy);

	const totalAuthor = await Author.countDocuments(filters);
	const pageCount = Math.ceil(totalAuthor / limit);

	return { totalAuthor, pageCount, authors };
};

const createAuthorService = async data => {
	const author = await Author.create(data);
	return author;
};

module.exports = { createAuthorService, getAuthorService };
