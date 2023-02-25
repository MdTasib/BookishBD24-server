const express = require("express");
const router = express.Router();
const {
	getOrders,
	createOrder,
	updateOrderStatus,
	paymentConfirm,
} = require("../controllers/placeOrder.controllers");

router.route("/").post(createOrder).get(getOrders);
router.route("/:id").put(updateOrderStatus);
router.route("/payment/:id").patch(paymentConfirm);

module.exports = router;
