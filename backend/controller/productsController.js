const product = require("../models/productsModel");
const mongoose = require("mongoose");
// get all products
const { log } = console;
const getAllproducts = async (req, res) => {
  try {
    const allProduct = await product.find({}).sort({ createdAt: -1 });
    if (!allProduct) {
      throw Error("Product not found");
    }
    res.status(200).json(allProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// create new product

const createProduct = async (req, res) => {
  const { id, name, price, quantity, description, category, imageURL } =
    req.body;
  try {
    const newProduct = await product.create({
      id,
      name,
      price,
      quantity,
      description,
      category,
      imageURL,
    });
    if (!newProduct) {
      throw Error("unable to create product");
    }
    res.status(200).json(newProduct);
  } catch (error) {
    log(error, error.message);
    res.status(400).send({ message: error.message });
  }
};

// get single product

const getSingleProduct = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw Error("Invalid product id");
    }
    const singleProduct = await product.findOne({ _id: id });
    if (!singleProduct) {
      throw Error(`Product ${id} not found in the database`);
    }
    res.status(200).json(singleProduct);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// delete product

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw Error("invalid product id");
    }
    const deletedProduct = await product.findOneAndDelete({ _id: id });
    if (!deletedProduct) {
      throw Error(`unable to delete product ${id}`);
    }
    res.status(200).json(deletedProduct);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// update product

const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw Error("invalid product id: " + id);
    }
    const updateSingleProduct = await product.findOneAndUpdate(
      { _id: id },
      { ...req.body }
    );
    if (!updateSingleProduct) {
      throw Error("unable to update product with the id " + id);
    }
    res.status(200).json({ message: updateSingleProduct });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

module.exports = {
  getAllproducts,
  createProduct,
  getSingleProduct,
  deleteProduct,
  updateProduct,
};
