const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const fosterSearch = require('./routes/foster-search')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/foster-search', fosterSearch)

app.listen(port, () => {
  console.log('zello kittens!')
})


module.exports = app
