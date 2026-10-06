//import express
const express = require('express')
const { addDiaryController, getDiaryController } = require('./controller/diaryController')

const router = new express.Router()

//router for add diary data
router.post('/add-diary-data', addDiaryController)

//router for get diary data
router.get('/get-diary-data', getDiaryController)

module.exports = router