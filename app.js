const express = require('express')
const express_hbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const mongoose = require('mongoose')

const PORT = 3000
const app = express()

//setting handlebars/bodyParser/method-override
app.engine('handlebars', express_hbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(express.static('public'))

//非production環境使用doten
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

//mongoDB setting
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('MongoDB error')
})

db.once('open', () => {
  console.log('MongoDB connect!!!')
})

//homepage
app.get('/', (req, res) => {
  res.render('index')
})

//app.listen
app.listen(PORT, () => {
  console.log(`App is listen on localhost:${PORT}`)
})