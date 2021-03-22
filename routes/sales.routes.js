const express = require('express')
const router = express.Router()

// controllers
const salesControllers = require('../controller/sales.controller')

//  Get Users
router.get('/sales', salesControllers.getAllSales)

//  Get User
router.get('/sales/:sid', salesControllers.getSales)

//  Daily Report
router.post('/sales/report/daily-report', salesControllers.getDailyReport)

//  Monthly Report 
router.post('/sales/report/monthly-report', salesControllers.getMonthlyReport)

//  Yearly Report
router.post('/sales/report/yearly-report', salesControllers.getYearlyReport)

//  create Users
router.post('/sales', salesControllers.createSales)

//  update Users
router.patch('/sales/:sid', salesControllers.updateSales)

//  delete Users
router.delete('/sales/:sid', salesControllers.deleteSales)

module.exports = router