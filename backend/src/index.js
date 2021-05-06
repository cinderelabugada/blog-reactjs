const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

// a3f563fe
const app = express()
const port = process.env.PORT || 3000

const login = require('./routes/login')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(morgan('common'))

app.use('/',login)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

