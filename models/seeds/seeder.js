const db = require('../../config/mongoose')
const URL = require("../url")

require('dotenv').config() //載入dotenv環境變數做使用

const seed = [
  {
    originURL: 'https://www.instagram.com/',
    shortURL: 'acd13',
  },
  {
    originURL: 'https://www.google.com/',
    shortURL: 'VvG61',
  },
  {
    originURL: 'https://www.facebook.com/',
    shortURL: 'h761G',
  },
  {
    originURL: 'https://www.amazon.com/',
    shortURL: '33n8E',
  },
  {
    originURL: 'https://www.shopee.tw/',
    shortURL: 'Sdtl3'
  }
]

db.once('open', () => {
  URL.insertMany(seed)
  console.log('seed insert done!!!')
})



