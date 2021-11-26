const express = require ('express');
const getCartProducts = require ('../controllers/cart');

// Router init
const router = express.Router ();

// Get all products
router.get ('/', getCartProducts);

// Export the router
module.exports = router;
