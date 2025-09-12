const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema({
    quote: {
        type: String,
        required: true
    },
    author: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("Quote", quoteSchema, "quotes");