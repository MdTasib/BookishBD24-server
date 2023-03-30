const mongoose = require("mongoose");

const sliderSchema = mongoose.Schema({
	image: {
		type: String,
		required: true,
	},
});

const slider = mongoose.model("slider", sliderSchema);
module.exports = slider;
