const User= require("../models/User")
const createUserService = async data => {
	const user = await User.create(data);
	return user;
};
const updateUserByIdService = async (id, data) => {
	console.log(id, data);
	const User = await User.findOne({ _id: id });
	const result = await User.set(data).save();
	return result;
};

module.exports = {
	createUserService,
	updateUserByIdService
};