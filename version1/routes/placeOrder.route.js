const express = require("express");
const router = express.Router();
const {
	getOrders,
	createOrder,
	updateOrderStatus,
	paymentConfirm,
	paymentIntent,
} = require("../controllers/placeOrder.controllers");

router.route("/").post(createOrder).get(getOrders);
router.route("/:id").put(updateOrderStatus);
router.route("/payment/:id").patch(paymentConfirm);
router.route("/create-payment-intent").post(paymentIntent);

module.exports = router;
