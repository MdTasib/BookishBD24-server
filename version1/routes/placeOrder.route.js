const express = require("express");
const router = express.Router();
const {
	getOrders,
	createOrder,
} = require("../controllers/placeOrder.controllers");

router.route("/").post(createOrder).get(getOrders);

module.exports = router;
