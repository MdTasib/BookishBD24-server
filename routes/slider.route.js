const express = require("express");
const router = express.Router();
const {
	createSliderImage,
	getSliderImages,
} = require("../controllers/slider.controller");

router.get("/slider", getSliderImages);
router.post("/slider", createSliderImage);

module.exports = router;
