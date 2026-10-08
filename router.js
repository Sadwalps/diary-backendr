//import express
const express = require('express')
const { addDiaryController, getDiaryController, deleteDiaryController } = require('./controller/diaryController')

const router = new express.Router()

//router for add diary data
router.post('/add-diary-data', addDiaryController)

//router for get diary data
router.get('/get-diary-data', getDiaryController)

//router for delete diary data
router.delete('/delete-diary-data/:id', deleteDiaryController)

module.exports = router