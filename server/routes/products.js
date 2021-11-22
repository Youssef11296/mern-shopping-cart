const express = require ('express');
const {
  getAllProducts,
  createProduct,
  getProduct,
  deleteProduct,
} = require ('../controllers/products');

// Router init
const router = express.Router ();

// Get all products
router.get ('/', getAllProducts);

// Craete product
router.post ('/new', createProduct);

// Get product
router.get ('/:id', getProduct);

// Delete product
router.delete ('/:id', deleteProduct);

// Export the router
module.exports = router;
