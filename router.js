//import express
const express = require('express')
const { addDiaryController } = require('./controller/diaryController')

const router = new express.Router()

//router for add diary data
router.post('/add-diary-data', addDiaryController)

module.exports = router