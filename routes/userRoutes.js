const {loginUser, registerUser, getAllUsers} = require("../controllers/userController.js");
const express = require("express");
const router = express.Router();

router.post("/register", registerUser);

router.get("/", getAllUsers);

router.post("/login", loginUser);


module.exports = router;