const express = require("express");
const authRouter = require("./routes/authRoutes");
const logger = require("./utils/logger");
const cookieParser = require("cookie-parser");
const errorRoute = require("./utils/errorRoute");

const app = express();

// middleware to parse request cookies
app.use(cookieParser());

// middleware to parse the request body
app.use(express.json());

// middleware to log all incoming requests
app.use(logger);

app.use("/api/v1/auth", authRouter);

// middleware to handle 404 errors
app.use(errorRoute);

module.exports = app