const express = require("express");
const router = express.Router();
const { createBook } = require("../controllers/book.controllers");

router.post("/", createBook);

module.exports = router;
