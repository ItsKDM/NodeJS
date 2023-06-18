const express = require('express');

const productController = require('../controllers/products');

const router = express.Router();

// /shop/ -> GET
router.get('/', productController.getProducts);

module.exports = router;