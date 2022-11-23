const express = require('express')
const router = express.Router()
const URL = require('../../models/url')
const generateShortURL = require('../../generateShortURL')

const localhost = 'http://localhost:3000'

//homepage
router.get('/', (req, res) => {
  res.render('index')
})

//submit url get short url
router.post('/', (req, res) => {
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
router.get('/:shortURL', (req, res) => {
  const shortURL = req.params.shortURL
  URL.findOne({ shortURL })
    .lean()
    .then(url => {
      res.redirect(url.originURL)
    })
    .catch(error => console.log(error))

})

//匯出
module.exports = router