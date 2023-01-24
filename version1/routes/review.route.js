const express = require("express");
const router = express.Router();
const {
	createReview,
	getReviews
} = require("../controllers/review.controllers");

router.route("/").post(createReview).get(getReviews);

module.exports = router;