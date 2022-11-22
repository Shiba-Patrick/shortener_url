//loading 需要的套件以及mongoose&亂數產生function
const express = require('express')
const express_hbs = require('express-handlebars')
const bodyParser = require('body-parser')
const URL = require('./models/url')
const generateShortURL = require('./generateShortURL')

const mongoose = require('mongoose')

const PORT = 3000
const localhost = 'http://localhost:3000'
const app = express()

//setting handlebars/bodyParser
app.engine('handlebars', express_hbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))

//非production環境使用dotenv
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

//submit url get short url
app.post('/', (req, res) => {
  const originURL = req.body.originURL

  URL.findOne({ originURL }) //確認資料庫已有無此筆資料
    .lean()
    .then(url => {  //若已有此資料則回傳相對應的短網誌,反之則產生新的短網誌
      if (!url) {
        const getURL = generateShortURL() //產生亂數5碼
        const shortURL = `${localhost}/${getURL}` //localhost+亂數5碼

        URL.create({ originURL, shortURL: getURL }) //create 一筆新的資料
          .then(() => {
            res.render('shortUrl', { shortURL }) //render進去shortUrl頁面
          })
          
          .catch(error => console.log())
      } else {
        const shortURL = `${localhost}/${url.shortURL}` //localhost+已建立的亂數5碼
        res.render('shortUrl', { shortURL })
      }
    })
    .catch(error => console.log(error))
})

//產生短網址後導向該網站的路由設定
app.get('/:shortURL', (req, res) => {
  const shortURL = req.params.shortURL
  URL.findOne({ shortURL })
    .lean()
    .then(url => {
      res.redirect(url.originURL)
    })
    .catch(error => console.log(error))

})

//app.listen
app.listen(PORT, () => {
  console.log(`App is listen on localhost:${PORT}`)
})