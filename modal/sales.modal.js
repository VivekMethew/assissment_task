const { client } = require('../db/connection')

// Search Records
module.exports = {
    selectSales: async(query) => {
        return await new Promise((resolve, reject) => {
            client.query(query, (err, result) => {
                if (err) {
                    reject(err)
                }
                resolve(result.rows)
            })
            client.end
        })
    },
    addSales: async({ id, username, amount, timestamp }) => {
        // INSERT INTO sales VALUES('SDHGDSG','vivekmethew8@gmail.com',1254,'454545455454',1)
        return await new Promise((resolve, reject) => {
            client.query(`INSERT INTO sales VALUES('${id}','${username}','${amount}','${timestamp}',1)`, (err, result) => {
                if (err) {
                    reject(err)
                }
                resolve(result)
            })
            client.end
        })
    }
}