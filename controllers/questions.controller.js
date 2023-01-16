const { getDB } = require("../utils/dbConnected");

// POST A QUESTIONS TO THE DATABASE
const createQuestion = async (req, res, next) => {
	try {
		const db = getDB();
		const question = req.body;
		const result = await db.collection("questions").insertOne(question);

		if (!result.insertedId) {
			return res
				.status(400)
				.send({ success: false, error: "Something went wrong!" });
		}

		res.status(200).send({
			success: true,
			message: `Question added successfully`,
		});
	} catch (error) {
		next(error);
	}
};

// GET ALL QUESTIONS FROM DATABASE
const getQuestions = async (req, res, next) => {
	try {
		const db = getDB();
		const questions = await db.collection("questions").find().toArray();
		res.status(200).send({ success: true, data: questions });
	} catch (error) {
		next(error);
	}
};

module.exports = { createQuestion, getQuestions };
