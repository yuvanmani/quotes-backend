## Quotes Generator

## Description

This is an Quotes Generator application developed by using MERN Stack (MongoDB, Express.js, React.js, Node.js). In this app, we can generate different quotes with each API call. We can store our favorite quotes in the database and later view them through a seperate API call.

## Features

-- User authentication (sign up, login, logout)
-- Quotes generation (by API call)
-- Saving favorite quotes (using mongoose)
-- Retrieve favorite quotes (get request)

## Model Structure

## User Model
-- name
-- email
-- password

## Quote Model
-- quote
-- author
-- userId


## End points

/auth
    - POST "/register" - Register a new user
    - POST "/verifyotp" - OTP verification for registering new user
    - POST "/login" - Login a user
    - POST "/logout" - Logout a user
    - GET "/me" - Get user profile

/quotes
    - GET "/generate" - Get 10 results with each API call
    - POST "/save" - Save quote in the favorites
    - GET "/getquotes" - View all quotes saved in favorites
    

### NOTE :

I initially attempted to generate quotes using an AI platform via an API key. However, I found that most options were not available free of charge. As an alternative, I opted to use ZenQuotes API, which provided a cost-effective solution for generating quotes.
