const express = require("express");
const router = express.Router();
const {
	createBook,
	getBooks,
	updateBookById,
	deleteBookById,
	getBookById,
} = require("../controllers/book.controllers");

router.route("/").post(createBook).get(getBooks);
router
	.route("/:id")
	.get(getBookById)
	.patch(updateBookById)
	.delete(deleteBookById);

module.exports = router;
