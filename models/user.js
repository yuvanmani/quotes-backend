const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    otp: String,
    otpExpires: Date,
    isVerified: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

module.exports = mongoose.model("User", userSchema, "users");