const Review =require("../models/Review");

const getReviewService = async (filters, queries) => {
	// const product = await Product.find({ status: { $ne: "out-of-stock" } });
	// const product = await Product.find({}).sort({ price: 1 });

	// http://localhost:5000/api/v1/product?sort=price,quantity
	// const product = await Product.find({}).sort(queries.sortBy);

	// http://localhost:5000/api/v1/product?sort=price,quantity&fields=name,description

	const { skip, limit, fields, sortBy } = queries;

	const reviews = await Review.find(filters)
		.skip(skip)
		.limit(limit)
		.select(fields)
		.sort(sortBy);

	const totalReview = await Review.countDocuments(filters);
	const pageCount = Math.ceil(totalReview / limit);

	return { totalReview, pageCount, reviews };
};


const createReviewService = async data => {
	const review = await Review.create(data);
	return review;
};


module.exports = {
	createReviewService,
	getReviewService
};