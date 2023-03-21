const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
	userName: {
		type: String,
		required: true,
		trim: true,
		minLenght: [2, "Name must be al last 3 characters"],
		maxLenght: [100, "Name is too large"],
	},
	userEmail: {
		type: String,
		required: true,
		trim: true,
		unique: true,
	},
	address: {
		type: String,
		required: false,
	},
	imageURL: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: false,
	},
});

const User = mongoose.model("User", userSchema);
module.exports = User;
