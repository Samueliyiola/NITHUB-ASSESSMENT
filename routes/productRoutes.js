const {createProduct, editProduct} = require("../controllers/productController.js");
const express = require("express");
const router = express.Router();

router.post("/create", createProduct);
router.patch("/edit/:id", editProduct);

module.exports = router;
