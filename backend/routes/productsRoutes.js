const express = require("express");
const router = express.Router();
const { getAllproducts, createProduct, getSingleProduct, deleteProduct, updateProduct , getProductsByCategory } = require('../controller/productsController')

// get all products
router.get("/", getAllproducts);

// create new products
router.post("/", createProduct);
// get single product

router.get("/:id", getSingleProduct);

// get Products by category name

router.get("/category/:category", getProductsByCategory);

// delete single product
router.delete("/:id", deleteProduct);

// update a single product
router.patch("/:id", updateProduct);

module.exports = router
