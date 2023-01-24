const {
	createReviewService,
	getReviewService
} =require("../services/review.service");

const getReviews = async (req, res, next) => {
	try {

		// EXCLUDE FIELDS FROM QUERY STRING ( ADVANCED )
		let filters = { ...req.query };

		// sort, page, limit -> exclude
		const excludeFields = ["sort", "page", "limit"];
		excludeFields.forEach(field => delete filters[field]);
		// console.log("Original object", req.query);
		// console.log("copy object", filters);

		// Filtering with Operators
		// http://localhost:5000/api/v1/product?price[lt]=50
		let filtersString = JSON.stringify(filters);
		filtersString = filtersString.replace(
			/\b(gt|gte|lt|lte)\b/g,
			match => `$${match}`
		);

		filters = JSON.parse(filtersString);

		const queries = {};

		if (req.query.sort) {
			const sortBy = req.query.sort.split(",").join(" ");
			queries.sortBy = sortBy;
		}

		if (req.query.fields) {
			const fields = req.query.fields.split(",").join(" ");
			queries.fields = fields;
		}

		if (req.query.page || req.query.limit) {
			const { page = 1, limit = 10 } = req.query;

			const skip = (page - 1) * Number(limit);
			queries.skip = skip;
			queries.limit = Number(limit);
		}

		const review = await getReviewService(filters, queries);

		res.status(200).json({
			status: "success",
			data: review,
		});
	} catch (error) {
		res.status(400).json({
			status: "Failed",
			message: "Can't get data",
			error: error.message,
		});
	}
};

const createReview = async (req, res) => {
    try {
		const result = await createReviewService(req.body);

		res.status(200).json({
			status: "success",
			message: "review inserted successfully",
			data: result,
		});
	} catch (error) {
		res.status(400).json({
			status: "Failed",
			message: "review is't inserted",
			error: error.message,
		});
	}
  }

module.exports = {
	createReview,
	getReviews
};