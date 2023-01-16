const express = require("express");
const router = express.Router();
const { createRate, getRates } = require("../controllers/rate.controller");

router.get("/rates", getRates);
router.post("/rates", createRate);

module.exports = router;
