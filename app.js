const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')

const fosterSearch = require('./routes/foster-search')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use('/foster-search', fosterSearch)

app.listen(port, () => {
  console.log('zello kittens!')
})


module.exports = app
