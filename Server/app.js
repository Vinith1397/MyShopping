const express = require('express')
const ProductsRoute = require('./Routes/ProductsRoute')
const HomeRoute = require('./Routes/HomeRoute')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
app.use( express.json())
app.use( morgan('dev'))
app.use(cors())
app.use('/api/v1/products',ProductsRoute)
app.use('/api/v1',HomeRoute)

module.exports = app


