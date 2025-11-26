require("dotenv").config();

const MONGODB_URI = process.env.MONGODB_URI;
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const JWT_SECRET = process.env.JWT_SECRET;
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const BREVO_API_KEY = process.env.BREVO_API_KEY;
const SENDER_NAME = process.env.SENDER_NAME;
const SENDER_EMAIL = process.env.SENDER_EMAIL;

module.exports = {
    MONGODB_URI,
    EMAIL_USER,
    EMAIL_PASS,
    JWT_SECRET,
    SENDGRID_API_KEY,
    BREVO_API_KEY,
    SENDER_NAME,
    SENDER_EMAIL
}