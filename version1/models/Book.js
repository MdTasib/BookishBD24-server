const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please provide a name for this book"],
			trim: true,
			minLenght: [2, "Name must be al last 3 characters"],
			maxLenght: [100, "Name is too large"],
		},
		description: {
			type: String,
			required: true,
		},
		imageURL: {
			type: String,
			required: true,
		},
		// images: [
		// 	{
		// 		type: String,
		// 		required: true,
		// 		validate: {
		// 			validator: values => {
		// 				// if (!Array.isArray(value)) {
		// 				// 	return false;
		// 				// }

		// 				let isValid = true;

		// 				values.forEach(url => {
		// 					if (!validator.isURL(url)) {
		// 						isValid = false;
		// 					}
		// 				});

		// 				return isValid;
		// 			},
		// 			message: "Please provide a valid image urls",
		// 		},
		// 	},
		// ],
		category: {
			type: String,
			required: true,
		},
		author: {
			type: String,
			required: true,
		},
		publication: {
			type: String,
			required: true,
		},
		subject: {
			type: String,
			required: true,
		},
		pages: {
			type: Number,
			required: true,
		},
		cover: {
			type: String,
			required: true,
		},
		cover: {
			type: String,
			required: true,
		},
		edition: {
			type: String,
			required: true,
		},
		language: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		discount: {
			type: Number,
			required: true,
		},
		prePrice: {
			type: Number,
			required: true,
		},
		quentity: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

// MONGOOSE MIDDLEWARES FOR SAVEING DATA: PRE / POST
bookSchema.pre("save", function (next) {
	console.log("Before product created".bgGreen);

	if (this.quantity === 0) {
		this.status = "out-of-stock";
	}
	next();
});

// MODEL
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
