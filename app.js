const express = require('express')
const express_hbs = require('express-handlebars')

const PORT = 3000
const app = express()

//setting handlebars
app.engine('handlebars',express_hbs.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(PORT, () => {
  console.log(`App is listen on localhost:${PORT}`)
})