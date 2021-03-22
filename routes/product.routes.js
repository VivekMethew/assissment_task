const express = require('express')
const router = express.Router()

// controllers
const productControllers = require('../controller/product.controller')

//  Get products
router.get('/products', productControllers.getAllProduct)

//  Get product
router.get('/products/:pid', productControllers.getProduct)

//  create products
router.post('/products', productControllers.createProducts)

//  update products
router.patch('/products/:pid', productControllers.updateProducts)

//  delete products
router.delete('/products/:pid', productControllers.deleteProducts)

module.exports = router