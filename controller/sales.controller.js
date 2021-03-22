const { addSales, selectSales } = require('../modal/sales.modal')
const { dailyReport, monthlyReport, yearlyReport } = require('../helper/sales.report')
const { v4: uuidv4 } = require('uuid')

module.exports = {
    getAllSales: async(req, res, next) => {
        try {
            await selectSales("SELECT * FROM sales")
                .then(data => {
                    res.status(200).json({
                        success: true,
                        message: 'find',
                        sales: data
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
    getSales: async(req, res, next) => {
        try {
            await selectSales(`select * from sales where id='${req.params.sid}'`)
                .then(data => {
                    res.status(200).json({
                        success: true,
                        message: 'find',
                        sale: data
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
    getDailyReport: async(req, res, next) => {
        console.log(req.body)
        try {
            await dailyReport(req.body).then(data => {
                res.status(200).json({
                    success: true,
                    message: 'Daily Report',
                    salesReport: data
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
    getMonthlyReport: async(req, res, next) => {
        console.log(req.body)
        try {
            await monthlyReport(req.body).then(data => {
                res.status(200).json({
                    success: true,
                    message: 'Monthly Report',
                    salesReport: data
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
    getYearlyReport: async(req, res, next) => {
        console.log(req.body)
        try {
            await yearlyReport(req.body).then(data => {
                res.status(200).json({
                    success: true,
                    message: 'Yearly Report',
                    salesReport: data
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
    createSales: async(req, res, next) => {
        try {
            await addSales({
                    id: uuidv4(),
                    username: req.body.username,
                    amount: req.body.amount,
                    timestamp: new Date(),

                })
                .then(data => {
                    res.status(201).json({
                        success: true,
                        message: 'sales created',
                        sales: data
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
    updateSales: async(req, res, next) => {
        res.send('success')
    },
    deleteSales: async(req, res, next) => {
        res.send('success')
    },
}