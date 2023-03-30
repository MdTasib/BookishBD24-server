const express = require("express");
const router = express.Router();
const {
	createSlider,
	getSliders,
} = require("../controllers/slider.controllers");

router.route("/").post(createSlider).get(getSliders);

module.exports = router;
