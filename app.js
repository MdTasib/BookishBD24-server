const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
// ROUTES
const bookRoutes = require("./version1/routes/book.route");
const authorRoutes = require("./version1/routes/author.route");
const reviewRoutes = require("./version1/routes/review.route");
const sliderRoutes = require("./version1/routes/slider.route");
const userRoutes = require("./version1/routes/user.route");
const orderRoutes = require("./version1/routes/placeOrder.route");
// const {
// 	paymentIntent,
// } = require("./version1/controllers/placeOrder.controllers");

// MIDDLEWARES
app.use(express.json());
app.use(cors());

// ROUTES
app.use("/api/v1/book", bookRoutes);
app.use("/api/v1/author", authorRoutes);
app.use("/api/v1/review", reviewRoutes);
app.use("/api/v1/slider", sliderRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/place-order", orderRoutes);
// app.post("/create-payment-intent", paymentIntent);

app.get("/", (req, res) => {
	res.send("Route is working! YaY!");
});

// NOT FOUND ROUTE
app.all("*", (req, res) => {
	res.send("NO route found.");
});

module.exports = app;
