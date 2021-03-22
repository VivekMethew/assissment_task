const { createProducts, selectProducts } = require('../modal/product.modal')
const { v4: uuidv4 } = require('uuid')


module.exports = {
    getAllProduct: async(req, res, next) => {
        try {
            await selectProducts("SELECT * FROM products")
                .then(data => {
                    res.status(200).json({
                        success: true,
                        message: 'find',
                        products: data
                    })
                }).catch(err => {
                    res.status(500).json({
                        success: false,
                        message: err.message,
                    })
                })
        } catch (err) {
            res.status(500).json({
                success: false,
                message: err.message,
            })
        }
    },
    getProduct: async(req, res, next) => {
        try {
            await selectProducts(`select * from products where id='${req.params.pid}'`)
                .then(data => {
                    res.status(200).json({
                        success: true,
                        message: 'find',
                        product: data
                    })
                }).catch(err => {
                    res.status(500).json({
                        success: false,
                        message: err.message,
                    })
                })
        } catch (err) {
            res.status(500).json({
                success: false,
                message: err.message,
            })
        }
    },
    createProducts: async(req, res, next) => {
        try {
            await addSales({
                    id: uuidv4(),
                    pname: req.body.pname,
                    price: req.body.price,
                    timestamp: new Date(),

                })
                .then(data => {
                    res.status(201).json({
                        success: true,
                        message: 'product created',
                        product: data
                    })
                }).catch(err => {
                    res.status(500).json({
                        success: false,
                        message: err.message,
                    })
                })
        } catch (err) {
            res.status(500).json({
                success: false,
                message: err.message,
            })
        }
    },
    updateProducts: async(req, res, next) => {
        res.send('success')
    },
    deleteProducts: async(req, res, next) => {
        res.send('success')
    },
}