const express = require("express");
const router = express.Router();
const { getAllProducts, getProductById } = require("../controller/productController")

//Description :get all products
router.get("/", getAllProducts)


router.get("/:id", getProductById)

module.exports = router;