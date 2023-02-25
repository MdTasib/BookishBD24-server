const express = require("express");
const router = express.Router();
const {
	getOrders,
	createOrder,
	updateOrderStatus,
} = require("../controllers/placeOrder.controllers");

router.route("/").post(createOrder).get(getOrders);
router.route("/:id").put(updateOrderStatus);

module.exports = router;
