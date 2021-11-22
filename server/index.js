const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

// DB setup
mongoose.connect(process.env.URI)
const connection = mongoose.connection
connection.once('open', () => console.log('The DB is sucessfully established'))

// Server init
const app = express()

// Server middlewares
app.use(express.json())
app.use(cors())

// Server configuration
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`The server is successfully running on port: ${port}`))