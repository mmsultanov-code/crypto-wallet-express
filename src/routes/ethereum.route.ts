import { EthereumController } from '../controllers'
const express = require('express')
const EthereumRoutes = express.Router()

EthereumRoutes.post('/create', EthereumController.createWallet)
EthereumRoutes.get('/balance/:address', EthereumController.getBalance)
EthereumRoutes.post('/transaction', EthereumController.sendTransaction)
EthereumRoutes.get('/transaction/:hash', EthereumController.getTransaction)

export default EthereumRoutes
