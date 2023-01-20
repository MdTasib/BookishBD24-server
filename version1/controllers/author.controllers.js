const { createAuthorService } = require("../services/author.service");

const createAuthor = async (req, res, next) => {
	try {
		const result = await createAuthorService(req.body);

		res.status(200).json({
			status: "success",
			message: "Data inserted successfully",
			data: result,
		});
	} catch (error) {
		res.status(400).json({
			status: "Failed",
			message: "Data is't inserted",
			error: error.message,
		});
	}
};

module.exports = { createAuthor };
