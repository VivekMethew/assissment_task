const { client } = require('../db/connection')

// Search Records
module.exports = {
    selectUsers: async(query) => {
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

    createUsers: async({ id, fname, lname, email, pass, phone }) => {
        return await new Promise((resolve, reject) => {
            client.query(`INSERT INTO users VALUES('${id}','${fname}','${lname}','${email}','${pass}','${phone}',1)`, (err, result) => {
                if (err) {
                    reject(err)
                }
                resolve(result)
            })
            client.end
        })
    }
}