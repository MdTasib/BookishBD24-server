const Slider = require("../models/Slider");

const getSliderService = async () => await Slider.find({});

const createSliderService = async data => await Slider.create(data);

module.exports = {
	getSliderService,
	createSliderService,
};
