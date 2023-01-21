const express = require("express");
const router = express.Router();
const {
	createBook,
	getBooks,
	updateBookById,
} = require("../controllers/book.controllers");

router.route("/").post(createBook).get(getBooks);
router.route("/:id").patch(updateBookById);

module.exports = router;
