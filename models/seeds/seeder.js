const mongoose = require('mongoose')
const URL = require("../url")
const PORT = 3000
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

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('MongoDB error')
})

db.once('open', () => {
  console.log('MongoDB connect!!!')
  URL.insertMany(seed)
  console.log('seed insert done!!!')
})



