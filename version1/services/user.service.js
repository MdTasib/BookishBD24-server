const User = require("../models/User");

const getUserService = async (filters, queries) => {
	// const product = await Product.find({ status: { $ne: "out-of-stock" } });
	// const product = await Product.find({}).sort({ price: 1 });

	// http://localhost:5000/api/v1/product?sort=price,quantity
	// const product = await Product.find({}).sort(queries.sortBy);

	// http://localhost:5000/api/v1/product?sort=price,quantity&fields=name,description

	const { skip, limit, fields, sortBy } = queries;

	const users = await User.find(filters)
		.skip(skip)
		.limit(limit)
		.select(fields)
		.sort(sortBy);

	const totalUsers = await User.countDocuments(filters);
	const pageCount = Math.ceil(totalUsers / limit);

	return { totalUsers, pageCount, users };
};

const getUserServiceById = async id => {
	const user = await User.findById({ _id: id });
	return user;
};

const createUserService = async data => {
	console.log("user data - ", data);
	const user = await User.create(data);
	return user;
};

const updateUserByIdService = async (id, data) => {
	const user = await User.findOne({ _id: id });
	const result = await user.set(data).save();
	return result;
};

const deleteUserByIdService = async id => {
	const result = await User.deleteOne({ _id: id });
	return result;
};

module.exports = {
	createUserService,
	getUserService,
	getUserServiceById,
	updateUserByIdService,
	deleteUserByIdService,
};
