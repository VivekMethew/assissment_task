const { client } = require('../db/connection')

// Search Records
module.exports = {
    selectProducts: async(query) => {
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
    createProducts: async({ id, pname, price, timestamp }) => {
        // INSERT INTO products VALUES('SDHGDSG','mounse',1254,'454545455454',1)
        return await new Promise((resolve, reject) => {
            client.query(`INSERT INTO products VALUES('${id}','${pname}','${price}','${timestamp}',1)`, (err, result) => {
                if (err) {
                    reject(err)
                }
                resolve(result)
            })
            client.end
        })
    }
}