const Order = require("../models/Order");

const getOrderService = async (filters, queries) => {
	// const product = await Product.find({ status: { $ne: "out-of-stock" } });
	// const product = await Product.find({}).sort({ price: 1 });

	// http://localhost:5000/api/v1/product?sort=price,quantity
	// const product = await Product.find({}).sort(queries.sortBy);

	// http://localhost:5000/api/v1/product?sort=price,quantity&fields=name,description

	const { skip, limit, fields, sortBy } = queries;

	const orders = await Order.find(filters)
		.skip(skip)
		.limit(limit)
		.select(fields)
		.sort(sortBy);

	const totalOrders = await Order.countDocuments(filters);
	const pageCount = Math.ceil(totalOrders / limit);

	return { totalOrders, pageCount, orders };
};

// const getOrderServiceById = async id => {
// 	const book = await Book.findById({ _id: id });
// 	return book;
// };

const createOrderService = async data => {
	const order = await Order.create(data);
	return order;
};

const updateOrderStatusService = async (id, data) => {
	const order = await Order.findOne({ _id: id });
	const result = await order.set(data).save();
	return result;
};

const paymentConfirmService = async (id, data) => {
	const order = await Order.findOne({ _id: id });
	const result = await order.set(data).save();
	return result;
};

module.exports = {
	createOrderService,
	getOrderService,
	updateOrderStatusService,
	paymentConfirmService,
};
