const express = require("express");
const router = express.Router();
const { getBooks, createBook } = require("../controllers/book.controller");

router.get("/v1/books", getBooks);
router.post("/v1/book", createBook);

module.exports = router;
