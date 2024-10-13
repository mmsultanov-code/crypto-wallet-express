import { UserController } from '../controllers'
const express = require('express')
const UserRoutes = express.Router()

UserRoutes.post('/register', UserController.register)
UserRoutes.post('/login', UserController.login)

export default UserRoutes
