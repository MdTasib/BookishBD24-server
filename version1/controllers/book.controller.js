const { getDB } = require("../utils/dbConnected");

// POST A BOOK TO THE DATABASE
const createBook = async (req, res, next) => {
	try {
		const db = getDB();
		const book = req.body;
		const result = await db.collection("books").insertOne(book);

		if (!result.insertedId) {
			return res
				.status(400)
				.send({ success: false, error: "Something went wrong!" });
		}

		res.status(200).send({
			success: true,
			message: `Book added successfully`,
		});
	} catch (error) {
		next(error);
	}
};

// GET ALL BOOK FROM DATABASE
const getBooks = async (req, res, next) => {
	try {
		const db = getDB();
		const books = await db.collection("books").find().toArray();
		res.status(200).send({ success: true, data: books });
	} catch (error) {
		next(error);
	}
};

module.exports = { createBook, getBooks };
