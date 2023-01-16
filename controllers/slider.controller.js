const { getDB } = require("../utils/dbConnected");

// POST A SLIDER IMAGE TO THE DATABASE
const createSliderImage = async (req, res, next) => {
	try {
		const db = getDB();
		const image = req.body;
		const result = await db.collection("images").insertOne(image);

		if (!result.insertedId) {
			return res
				.status(400)
				.send({ success: false, error: "Something went wrong!" });
		}

		res.status(200).send({
			success: true,
			message: `Image added successfully`,
		});
	} catch (error) {
		next(error);
	}
};

// GET ALL SLIDER IMAGES FROM DATABASE
const getSliderImages = async (req, res, next) => {
	try {
		const db = getDB();
		const images = await db.collection("images").find().toArray();
		res.status(200).send({ success: true, data: images });
	} catch (error) {
		next(error);
	}
};

module.exports = { createSliderImage, getSliderImages };
