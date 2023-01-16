const express = require("express");
const router = express.Router();
const {
	createQuestion,
	getQuestions,
} = require("../controllers/questions.controller");

router.get("/questions", getQuestions);
router.post("/questions", createQuestion);

module.exports = router;
