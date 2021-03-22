require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const userRoutes = require('./routes/users.routes')
const productRoutes = require('./routes/product.routes')
const salesRoutes = require('./routes/sales.routes')
const moment = require('moment')
const app = express()

const PORT = process.env.PORT || 5000

// body parser 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// routers
app.use('/api', userRoutes)
app.use('/api', productRoutes)
app.use('/api', salesRoutes)

// report.dailyReport({ day: 'sun', dd: '21', month: 'mar', yy: '2021' }).then(data => {
//     console.log('Daily Report', data)
// }).catch(err => console.log(err))

// report.monthlyReport({ month: 'mar', yy: '2021' }).then(data => {
//     console.log('Monthly Report', data)
// }).catch(err => console.log(err))

// report.yearlyReport({ yy: '2021' }).then(data => {
//     console.log('Yearly Report', data)
// }).catch(err => console.log(err))


app.listen(PORT, () => {
    console.log('Server running on ', PORT)
})