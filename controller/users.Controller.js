const { createUsers, selectUsers } = require('../modal/users.modal')
const { v4: uuidv4 } = require('uuid')

module.exports = {
    getAllUsers: async(req, res, next) => {
        try {
            await selectUsers("select * from users")
                .then(data => {
                    res.status(200).json({
                        success: true,
                        message: 'find',
                        users: data
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
    getUser: async(req, res, next) => {
        try {
            await selectUsers(`select * from users where id='${req.params.userid}'`)
                .then(data => {
                    res.status(200).json({
                        success: true,
                        message: 'find',
                        user: data
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
    createUsers: async(req, res, next) => {
        try {
            await createUsers({
                    id: uuidv4(),
                    fname: req.body.fname,
                    lname: req.body.lname,
                    email: req.body.email,
                    pass: req.body.pass,
                    phone: req.body.phone
                })
                .then(data => {
                    res.status(201).json({
                        success: true,
                        message: 'users created',
                        user: data
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
    updateUsers: async(req, res, next) => {
        res.send('success')
    },
    deleteUsers: async(req, res, next) => {
        res.send('success')
    },
}