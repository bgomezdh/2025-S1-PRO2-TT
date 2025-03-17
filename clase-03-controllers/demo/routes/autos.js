//1
const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

//2 sufijos

router.get('/', productController.index)

router.get('/brand/:brand', productController.filtrarMarca)


//3
module.exports = router;