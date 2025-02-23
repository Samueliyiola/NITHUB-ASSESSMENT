const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
// Import rate limiter middleware
const rateLimiter = require("./middlewares/rateLimiter.js");

// Import authentication middleware
const {authenticateUser, verifyAdmin} = require("./middlewares/auth.js");

//  Use ratelimiter globally on all endpoints
app.use(rateLimiter);

// Import the routes
const userRoutes = require("./routes/userRoutes.js");
const productRoutes = require("./routes/productRoutes.js");

// Use the routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/product" , verifyAdmin, productRoutes);

module.exports = app;