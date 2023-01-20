const express = require("express");
const {
	createAuthor,
	getAuthors,
} = require("../controllers/author.controllers");
const router = express.Router();

router.route("/").get(getAuthors).post(createAuthor);

module.exports = router;
