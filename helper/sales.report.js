const { selectSales } = require('../modal/sales.modal')
module.exports = {
    dailyReport: async({ day, dd, month, yy }) => {
        var sum = 0
        return await new Promise((resolve, reject) => {
            selectSales("select * from sales")
                .then(data => {
                    const repData = data.filter(d => {
                        return d.date.slice(0, 3).toLowerCase() === day.toLowerCase() && d.date.slice(4, 7).toLowerCase() === month.toLowerCase() && d.date.slice(8, 10) === dd && d.date.slice(11, 15) === yy
                    })
                    const sums = repData.map(rd => sum + rd.amount)
                    let totalSum = sums.reduce(getSum, 0)

                    function getSum(total, num) {
                        return total + Math.round(num);
                    }
                    resolve({
                        Report: 'Daily Sales Report',
                        TotalSum: totalSum
                    })
                })
                .catch(err => reject(err))
        })
    },
    monthlyReport: async({ month, yy }) => {
        var sum = 0
        return await new Promise((resolve, reject) => {
            selectSales("select * from sales")
                .then(data => {
                    const repData = data.filter(d => {
                        return d.date.slice(4, 7).toLowerCase() === month.toLowerCase() && d.date.slice(11, 15) === yy
                    })
                    const sums = repData.map(rd => sum + rd.amount)
                    let totalSum = sums.reduce(getSum, 0)

                    function getSum(total, num) {
                        return total + Math.round(num);
                    }
                    resolve({
                        Report: 'Monthly Sales Report',
                        TotalSum: totalSum
                    })
                })
                .catch(err => reject(err))
        })
    },
    yearlyReport: async({ yy }) => {
        var sum = 0
        return await new Promise((resolve, reject) => {
            selectSales("select * from sales")
                .then(data => {
                    const repData = data.filter(d => {
                        return d.date.slice(11, 15) === yy
                    })
                    const sums = repData.map(rd => sum + rd.amount)
                    let totalSum = sums.reduce(getSum, 0)

                    function getSum(total, num) {
                        return total + Math.round(num);
                    }
                    resolve({
                        Report: 'Yearly Sales Report',
                        TotalSum: totalSum
                    })
                })
                .catch(err => reject(err))
        })
    }
}