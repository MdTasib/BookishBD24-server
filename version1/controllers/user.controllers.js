const {createUserService,updateUserByIdService} =require("../services/user.service");

const createUser = async (req, res) => {
    try {
		const result = await createUserService(req.body);

		res.status(200).json({
			status: "success",
			message: "user inserted successfully",
			data: result,
		});
	} catch (error) {
		res.status(400).json({
			status: "Failed",
			message: "user is't inserted",
			error: error.message,
		});
	}
  }

  const updateUserById = async (req, res, next) => {
	try {
		const { email } = req.body;
		const result = await updateUserByIdService(email, req.body);

		res.status(200).json({
			data: result,
			status: "success",
			message: "Updated successfully",
		});
	} catch (error) {
		res.status(400).json({
			status: "Failed",
			message: "Couldn't update book",
			error: error.message,
		});
	}
};

module.exports = {
	createUser,
	updateUserById
};