const express = require("express");
const router = express.Router();
const {
	getProducts,
	createProduct,
} = require("../controllers/product.controller");

router.get("/product", getProducts);
router.post("/product", createProduct);

module.exports = router;
