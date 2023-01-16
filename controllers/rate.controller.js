const { getDB } = require("../utils/dbConnected");

// POST A RATE TO THE DATABASE
const createRate = async (req, res, next) => {
	try {
		const db = getDB();
		const rate = req.body;
		const result = await db.collection("rates").insertOne(rate);

		if (!result.insertedId) {
			return res
				.status(400)
				.send({ success: false, error: "Something went wrong!" });
		}

		res.status(200).send({
			success: true,
			message: `Rate added successfully`,
		});
	} catch (error) {
		next(error);
	}
};

// GET ALL QUESTIONS FROM DATABASE
const getRates = async (req, res, next) => {
	try {
		const db = getDB();
		const rates = await db.collection("rates").find().toArray();
		res.status(200).send({ success: true, data: rates });
	} catch (error) {
		next(error);
	}
};

module.exports = { createRate, getRates };
