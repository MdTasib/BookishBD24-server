const { getDB } = require("../utils/dbConnected");

// POST A PRODUCT TO THE DATABASE
const createProduct = async (req, res, next) => {
	try {
		const db = getDB();
		const product = req.body;
		const result = await db.collection("products").insertOne(product);

		if (!result.insertedId) {
			return res
				.status(400)
				.send({ success: false, error: "Something went wrong!" });
		}

		res.status(200).send({
			success: true,
			message: `Product added successfully`,
		});
	} catch (error) {
		next(error);
	}
};

// GET ALL PRODUCT FROM DATABASE
const getProducts = async (req, res, next) => {
	try {
		const db = getDB();
		const products = await db.collection("products").find().toArray();
		res.status(200).send({ success: true, data: products });
	} catch (error) {
		next(error);
	}
};

module.exports = { createProduct, getProducts };
