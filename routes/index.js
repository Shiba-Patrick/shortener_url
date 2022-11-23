const express = require('express')
const router = express.Router()
const home = require('./modules/home')

router.use('/',home)

//匯出
module.exports = router





