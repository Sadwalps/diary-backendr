//import mongoose 
const mongoose = require('mongoose')

const diarySchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    }
})

const diarydata = mongoose.model('diarydata', diarySchema)
module.exports = diarydata