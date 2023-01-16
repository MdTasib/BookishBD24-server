const express = require("express");
const router = express.Router();
const {
	getProducts,
	createProduct,
} = require("../controllers/book.controller");

router.get("/v1/books", getProducts);
router.post("/v1/product", createProduct);

module.exports = router;
