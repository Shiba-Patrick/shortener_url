const mongoose = require('mongoose')
const URL = require("../url")
const PORT = 3000
require('dotenv').config() //載入dotenv環境變數做使用

const seed = [
  {
    originURL: 'https://www.instagram.com/',
    shortURL: `http://localhost:${PORT}/URL1`,
    shortWords: 'URL1',
  },
  {
    originURL: 'https://www.google.com/',
    shortURL: `http://localhost:${PORT}/URL2`,
    shortWords: 'URL2',
  },
  {
    originURL: 'https://www.facebook.com/',
    shortURL: `http://localhost:${PORT}/URL3`,
    shortWords: 'URL3',
  },
  {
    originURL: 'https://www.amazon.com/',
    shortURL: `http://localhost:${PORT}/URL4`,
    shortWords: 'URL4',
  },
  {
    originURL: 'https://www.shopee.tw/',
    shortURL: `http://localhost:${PORT}/URL5`,
    shortWords: 'URL5',
  }
]

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('MongoDB error')
})

db.once('open', () => {
  console.log('MongoDB connect!!!')
  URL.create(seed)
  console.log('seed insert done!!!')
})



