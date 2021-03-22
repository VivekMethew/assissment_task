const express = require('express')
const router = express.Router()

// controllers
const userControllers = require('../controller/users.Controller')

//  Get Users
router.get('/users', userControllers.getAllUsers)

//  Get User
router.get('/users/:userid', userControllers.getUser)

//  create Users
router.post('/users', userControllers.createUsers)

//  update Users
router.patch('/users/:userid', userControllers.updateUsers)

//  delete Users
router.delete('/users/:userid', userControllers.deleteUsers)

module.exports = router