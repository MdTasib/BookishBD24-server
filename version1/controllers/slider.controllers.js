const {
	getSliderService,
	createSliderService,
} = require("../services/slider.service");

const getSliders = async (req, res, next) => {
	try {
		const sliders = await getSliderService();

		res.status(200).json({
			status: "success",
			data: sliders,
		});
	} catch (error) {
		res.status(400).json({
			status: "Failed",
			message: "Can't get sliders",
			error: error.message,
		});
	}
};

const createSlider = async (req, res) => {
	try {
		const result = await createSliderService(req.body);

		res.status(200).json({
			status: "success",
			message: "slider inserted successfully",
			data: result,
		});
	} catch (error) {
		res.status(400).json({
			status: "Failed",
			message: "slider is't inserted",
			error: error.message,
		});
	}
};

module.exports = {
	createSlider,
	getSliders,
};
