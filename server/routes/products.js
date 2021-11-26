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

// Get product
router.get ('/:id', getProduct);

// Create product | PRIVATE FOR ADMINS
router.post ('/new', createProduct);

// Delete product | PRIVATE FOR ADMINS
router.delete ('/:id', deleteProduct);

// Edit product | PUBLIC FOR AUTHENICATED USER FOR ADD PRODUCT TO HIS CART | PRIVATE FOR ADMINS
router.patch ('/:id', editProduct);

// Export the router
module.exports = router;
