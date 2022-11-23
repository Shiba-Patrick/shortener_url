//loading 需要的套件以及mongoose&亂數產生function
const express = require('express')
const express_hbs = require('express-handlebars')
const bodyParser = require('body-parser')
const routes = require('./routes')

require("./config/mongoose")

const PORT = process.env.PORT || 3000
const app = express()

//setting handlebars/bodyParser
app.engine('handlebars', express_hbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))

//use routes
app.use(routes)

//app.listen
app.listen(PORT, () => {
  console.log(`App is listen on http://localhost:${PORT}`)
})