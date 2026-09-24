//import dotenv
require(`dotenv`).config()

//import express
const express = require(`express`)

//import cors
const cors = require('cors')

//import router
const router = require('./router')

//import connection
require('./connection')

//create server
const diaryServer = express()

//tell the server to use cors
diaryServer.use(cors())

//tell the server to use express.json
diaryServer.use(express.json())

//tell the server to use router
diaryServer.use(router)

//set port for the server
const PORT = 4001 || process.env.PORT

//make the server listen to that port
diaryServer.listen(PORT, () => {
    console.log(`Server running successfully at port : ${PORT}`);
})

//to check the requset
diaryServer.get(`/`, (req, res) => {
    res.send(`Get request recieved`)
})