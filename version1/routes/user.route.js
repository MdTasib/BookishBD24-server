const express = require("express");
const router = express.Router();
const {
	createUser,
	updateUserById
} = require("../controllers/user.controllers");

router.route("/").post(createUser);
router.route("/:id").patch(updateUserById);

module.exports = router;