const express = require("express");
const { createAuthor } = require("../controllers/author.controllers");
const router = express.Router();

router.route("/").post(createAuthor);

module.exports = router;
