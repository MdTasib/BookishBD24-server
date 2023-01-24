const express = require("express");
const {
	createAuthor,
	getAuthors,
	updateAuthorById,
	deleteAuthorById,
} = require("../controllers/author.controllers");
const router = express.Router();

router.route("/").get(getAuthors).post(createAuthor);
router.route("/:id").patch(updateAuthorById).delete(deleteAuthorById);

module.exports = router;
