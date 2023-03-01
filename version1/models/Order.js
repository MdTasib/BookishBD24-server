const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please provide a name for this book"],
			trim: true,
			minLenght: [2, "Name must be al last 3 characters"],
			maxLenght: [100, "Name is too large"],
		},
		imageURL: {
			type: String,
			required: true,
		},
		author: {
			type: String,
			required: true,
			trim: true,
		},
		price: {
			type: Number,
			required: true,
			trim: true,
		},
		qty: {
			type: Number,
			required: true,
		},
		userEmail: {
			type: String,
			required: [true, "Please login with your email"],
			trim: true,
		},
		userName: {
			type: String,
			required: [true, "Please login with your email"],
			trim: true,
		},
		bookId: {
			type: String,
			required: true,
		},
		status: {
			type: String,
			required: false,
		},
		paid: {
			type: String,
			required: false,
		},
		transactionId: {
			type: String,
			required: false,
		},
	},
	{
		timestamps: true,
	}
);

// MODEL
const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
