const express = require("express");
const router = express.Router();
const {
	createUser,
	getUsers,
	getUserById,
	updateUserById,
	deleteUserById,
} = require("../controllers/user.controllers");

router.route("/").post(createUser).get(getUsers);
router
	.route("/:id")
	.get(getUserById)
	.patch(updateUserById)
	.delete(deleteUserById);

module.exports = router;
