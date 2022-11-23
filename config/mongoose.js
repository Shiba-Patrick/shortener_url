const mongoose = require('mongoose')

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

//匯出
module.exports = db