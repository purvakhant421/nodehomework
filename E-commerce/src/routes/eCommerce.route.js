const express = require("express");
const { ecommerceController } = require("../controllers")

const router = express.Router();

router.get(
    "/list",
    ecommerceController.get_all_list
)

module.exports = router;





// const express = require('express');
// const router = express.Router();
// const eCommerceController = require('../controllers/eCommerce.controller');
// const { body } = require('express-validator');
// const passport = require('../middlewares/auth');


// router.get('/categories', eCommerceController.showCategories);
// router.get('/products', eCommerceController.showProducts);
// router.post('/users', eCommerceController.createUser);




// router.post('/users', [
//   body('name').notEmpty().withMessage('Name is required'),
//   body('email').isEmail().withMessage('Invalid email').normalizeEmail(),
//   body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
// ], eCommerceController.createUser);

// router.post('/categories', [
//   body('name').notEmpty().withMessage('Category name is required'),
// ], eCommerceController.createCategory);

// router.post('/products', [
//   body('name').notEmpty().withMessage('Product name is required'),
// ], eCommerceController.createProduct);



// router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res) => {
//   res.json(req.user);
// });


// module.exports = router;


