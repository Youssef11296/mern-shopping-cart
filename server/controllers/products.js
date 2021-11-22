// Models
const Product = require ('../models/Product');

/* Controllers */

// Get all products | GET:/
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find ();
    res.status (200).json ({success: true, data: products});
  } catch (error) {
    res.status (404).json ({success: false, message: error.message});
  }
};

// Create product | POST:/new
const createProduct = async (req, res) => {
  try {
    const newProduct = new Product (req.body);
    await newProduct.save ();
    res.status (201).json ({success: true, data: newProduct});
  } catch (error) {
    res.status (401).json ({success: false, message: error.message});
  }
};

// Get product | GET:/:id
const getProduct = async (req, res) => {
  try {
    const filteredProduct = await Product.findById (req.params.id);
    res.status (200).json ({success: true, data: filteredProduct});
  } catch (error) {
    res.status (404).json ({success: false, message: error.message});
  }
};

// Delete product | DELETE:/:id
const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete (req.params.id);
    res.status (200).json ({success: true, message: 'Deleted !'});
  } catch (error) {
    res.status (res.statusCode).json ({success: false, message: error.message});
  }
};

// Export all controllers
module.exports = {getAllProducts, createProduct, getProduct, deleteProduct};
