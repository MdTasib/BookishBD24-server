const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
	rating: {
		type: Number,
		required: true,
	},
	review: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	photoURL: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	date: {
		type: String,
	},
});

const review = mongoose.model("review", reviewSchema);
module.exports = review;
