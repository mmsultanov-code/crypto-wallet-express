import { EthereumRoutes } from './src/routes/'

const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use('/wallet', EthereumRoutes)

app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + process.env.PORT)
})
