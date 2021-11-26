// Models
const Product = require ('../models/Product');
const Cart = require ('../models/Cart');

/* Controllers */
// Get cart products | GET:/
const getCartProduct = async (req, res) => {
  try {
    const products = await Product.find ({added: true});
    res.status (200).json ({success: true, data: products});
  } catch (error) {
    res.status (404).json ({success: false, message: error.message});
  }
};

// Export all controllers
module.exports = getCartProduct;
