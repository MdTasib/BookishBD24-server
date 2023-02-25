const {
	getOrderService,
	createOrderService,
	updateOrderStatusService,
} = require("../services/placeOrder.service");

// GET ALL ORDERS
const getOrders = async (req, res, next) => {
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

		const orders = await getOrderService(filters, queries);

		res.status(200).json({
			status: "sussess",
			data: orders,
		});
	} catch (error) {
		res.status(400).json({
			status: "Failed",
			message: "Can't get data",
			error: error.message,
		});
	}
};

// const getBookById = async (req, res, next) => {
// 	try {
// 		const book = await getBookServiceById(req.params.id);

// 		res.status(200).json({
// 			status: "sussess",
// 			data: book,
// 		});
// 	} catch (error) {
// 		res.status(400).json({
// 			status: "Failed",
// 			message: "Can't get data",
// 			error: error.message,
// 		});
// 	}
// };

// ORDER ON A BOOK (BUT DO NOT PURCHASE THE BOOK)
const createOrder = async (req, res, next) => {
	try {
		const result = await createOrderService(req.body);

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

// UPDATE PURCAHCES PRODUCT STATUS
const updateOrderStatus = async (req, res, next) => {
	try {
		const { id } = req.params;
		const result = await updateOrderStatusService(id, req.body);

		res.status(200).json({
			data: result,
			status: "success",
			message: "Updated status successfully",
		});
	} catch (error) {
		res.status(400).json({
			status: "Failed",
			message: "Couldn't update status",
			error: error.message,
		});
	}
};

module.exports = {
	createOrder,
	getOrders,
	updateOrderStatus,
};
