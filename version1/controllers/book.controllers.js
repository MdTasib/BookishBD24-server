const {
	createBookService,
	getBookService,
	updateBookByIdService,
	deleteBookByIdService,
	getBookServiceById,
} = require("../services/book.service");

const getBooks = async (req, res, next) => {
	try {
		// ALL RPODUCTS
		// const products = await Product.find({});

		// GET A SINGLE PRODUCT BY ID
		// const product = await Product.find({ name: "Dall" });

		// FIND PRODUCT OR OPARETOR
		// const product = await Product.find({
		// 	$or: [{ _id: "6322b419107bef27c8460770" }, { price: 50 }],
		// });

		// FIND PRODUCT NOT EQUAL out-of-stock ($ne: "out-of-stock")
		/**
		 * Greater then / Greater then or equal - $gt / $gte
		 * Less then / less then or equal - $lt / $lte
		 * if name is Dall/Chal {name: {$in: ["Dall", "Chal"]}}
		 */
		//  const product = await getProductService();

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

		const book = await getBookService(filters, queries);

		res.status(200).json({
			status: "sussess",
			data: book,
		});
	} catch (error) {
		res.status(400).json({
			status: "Failed",
			message: "Can't get data",
			error: error.message,
		});
	}
};

const getBookById = async (req, res, next) => {
	try {
		const book = await getBookServiceById(req.params.id);

		res.status(200).json({
			status: "sussess",
			data: book,
		});
	} catch (error) {
		res.status(400).json({
			status: "Failed",
			message: "Can't get data",
			error: error.message,
		});
	}
};

const createBook = async (req, res, next) => {
	try {
		const result = await createBookService(req.body);

		res.status(200).json({
			status: "success",
			message: "Data inserted successfully",
			data: result,
		});
	} catch (error) {
		res.status(400).json({
			status: "Failed",
			message: "Data is't inserted",
			error: error.message,
		});
	}
};

const updateBookById = async (req, res, next) => {
	try {
		const { id } = req.params;
		const result = await updateBookByIdService(id, req.body);

		res.status(200).json({
			data: result,
			status: "success",
			message: "Updated successfully",
		});
	} catch (error) {
		res.status(400).json({
			status: "Failed",
			message: "Couldn't update book",
			error: error.message,
		});
	}
};

const deleteBookById = async (req, res, next) => {
	try {
		const { id } = req.params;
		const result = await deleteBookByIdService(id);

		if (!result.deletedCount) {
			return res.status(400).json({
				status: "Failed",
				message: "Couldn't delete the book",
			});
		}

		res.status(200).json({
			status: "success",
			message: "Delete successfully",
		});
	} catch (error) {
		res.status(400).json({
			status: "Failed",
			message: "Couldn't delete book",
			error: error.message,
		});
	}
};

module.exports = {
	createBook,
	getBooks,
	getBookById,
	updateBookById,
	deleteBookById,
};
