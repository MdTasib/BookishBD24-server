const Review =require("../models/Review");

const getReviewService = async (filters, queries) => {
	
	const { skip, limit, fields, sortBy } = queries;

	const reviews = await Review.find(filters)
		.skip(skip)
		.limit(limit)
		.select(fields)
		.sort(sortBy);

	const totalReviews = await Review.countDocuments(filters);
	const pageCount = Math.ceil(totalReviews / limit);

	return { totalReviews, pageCount, reviews };
};


const createReviewService = async data => {
	const review = await Review.create(data);
	return review;
};


module.exports = {
	createReviewService,
	getReviewService
};