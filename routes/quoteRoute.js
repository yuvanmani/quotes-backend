const express = require("express");
const { generate, save, getQuotes } = require("../controllers/quoteController");
const { isAuthenticated } = require("../middlewares/auth");

const quoteRouter = express.Router();

// protected routes
quoteRouter.get("/generate", isAuthenticated, generate);
quoteRouter.post("/save", isAuthenticated, save);
quoteRouter.get("/getquotes", isAuthenticated, getQuotes);


module.exports = quoteRouter