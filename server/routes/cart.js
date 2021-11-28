const express = require ('express');
const getCartProducts = require ('../controllers/cart');
const {editProduct} = require ('../controllers/products');

// Router init
const router = express.Router ();

// Get all products
router.get ('/', getCartProducts);

// Remove cart product
// PRIVATE FOR ADMINS
// PUBLIC FOR AUTHENICATED USERS FOR DELETE PRODUCT FROM THEIR CARTS
router.patch ('/products/:id', editProduct);

// Export the router
module.exports = router;
