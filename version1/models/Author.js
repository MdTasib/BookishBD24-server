const mongoose = require("mongoose");

const authorSchema = mongoose.Schema(
	{
		author: {
			type: String,
			required: [true, "Please provide a author name for this book"],
			trim: true,
			minLenght: [2, "Author must be al last 3 characters"],
			maxLenght: [100, "Author is too large"],
		},
		authorEng: {
			type: String,
			required: [true, "Please provide a author name english for this book"],
			trim: true,
			minLenght: [2, "Name must be al last 3 characters"],
			maxLenght: [100, "Name is too large"],
		},
		imageUrl: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

// MODEL
const Author = mongoose.model("Author", authorSchema);

module.exports = Author;
