const express = require ('express');
const {
  getAllProducts,
  createProduct,
  getProduct,
  deleteProduct,
  editProduct,
} = require ('../controllers/products');

// Router init
const router = express.Router ();

// Get all products
router.get ('/', getAllProducts);

// Create product | PRIVATE FOR ADMINS
router.post ('/new', createProduct);

// Get product
router.get ('/:id', getProduct);

// Delete product | PRIVATE FOR ADMINS
router.delete ('/:id', deleteProduct);

// Edir product | PRIVATE FOR ADMINS
router.patch ('/:id', editProduct);

// Export the router
module.exports = router;
