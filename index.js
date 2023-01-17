const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;
const { connectToServer } = require("./version1/utils/dbConnected");
const errorHandler = require("./version1/middlewares/errorHandler");
const bookRoutes = require("./version1/routes/book.route");
const app = express();

// MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(errorHandler);

// ROUTES
app.use(bookRoutes);

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
