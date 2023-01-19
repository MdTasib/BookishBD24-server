const express = require("express");
const router = express.Router();
const { createBook, getBooks } = require("../controllers/book.controllers");

router.route("/").post(createBook).get(getBooks);

module.exports = router;
