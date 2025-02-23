const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

// Import the schemas
const user = require("./models/user.js");


module.exports = app;