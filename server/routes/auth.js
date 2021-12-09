const express = require ('express');
const {register} = require ('../controllers/auth');

// router init
const router = express.Router ();

// register
router.post ('/register', register);

// export the router
module.exports = router;
