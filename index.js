const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;
const { connectToServer } = require("./utils/dbConnected");
const errorHandler = require("./middlewares/errorHandler");
const app = express();
const questionsRoute = require("./routes/questions.route");
const slidersRoute = require("./routes/slider.route");
const productRoute = require("./routes/product.route");
const rateRoute = require("./routes/rate.route");

// MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(errorHandler);

// ROUTES
app.use(questionsRoute);
app.use(slidersRoute);
app.use(productRoute);
app.use(rateRoute);

// DATABASE CONNECTED
connectToServer(err => {
	if (!err) {
		app.listen(process.env.PORT, () => console.log("Port 5000 server running"));
	} else {
		console.log("DB DON'T CONNECTED");
	}
});

// NOT FOUND ROUTE
app.all("*", (req, res) => {
	res.send("Route Not Found");
});

// ERROR HANDLE
process.on("unhandledRejection", error => {
	console.log(error.name, error.message);
	app.close(() => {
		process.exit(1);
	});
});
