const axios = require("axios");
const Quote = require("../models/quote");

const quoteController = {
    generate: async (req, res) => {
        try {

            const response = await axios.get('https://zenquotes.io/api/quotes');

            // get only 10 results from each API call
            const quotes = response.data.slice(0, 10).map(quote => ({
                quote: quote.q,
                author: quote.a
            }))
            return res.json(quotes);

        }
        catch (error) {
            console.error("Error generating quotes :", error.message);
            return res.status(500).json({ error: 'Failed to generate quotes' });
        }
    },
    save: async (req, res) => {
        try {
            // get the userId from request
            const userId = req.userId;

            // get the details from the request body
            const { quote, author } = req.body;

            // create new quote
            const newQuote = new Quote({
                quote, author, userId
            })

            // save quote to the database
            await newQuote.save();

            // send response to the user
            return res.status(201).json({ message: "Quote saved successfully" });
        }
        catch (error) {
            return res.status(500).json({ message: "Quote saving failed" });
        }
    },
    getQuotes: async (req, res) => {
        try {
            // get userId from request
            const userId = req.userId;

            // get quotes from database for the user
            const quotes = await Quote.find({ userId }).select("-__v -createdAt -updatedAt");

            // send quotes in the response
            return res.status(200).json(quotes);
        }
        catch (error) {
            return res.status(500).json({ message: "Quotes retrieve failed" });
        }
    }
}

module.exports = quoteController