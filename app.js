const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
// ROUTES
const bookRoutes = require("./version1/routes/book.route");
const authorRoutes = require("./version1/routes/author.route");

// MIDDLEWARES
app.use(express.json());
app.use(cors());

// ROUTES
app.use("/api/v1/book", bookRoutes);
app.use("/api/v1/author", authorRoutes);

app.get("/", (req, res) => {
	res.send("Route is working! YaY!");
});

// NOT FOUND ROUTE
app.all("*", (req, res) => {
	res.send("NO route found.");
});

module.exports = app;
