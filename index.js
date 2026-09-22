//import dotenv
require(`dotenv`).config()

//import express
const express = require(`express`)

//create server
const diaryServer = express()

//import connection
require('./connection')

//set port for the server
const PORT = 4001 || process.env.PORT

//make the server listen to that port
diaryServer.listen(PORT,()=>{
    console.log(`Server running successfully at port : ${PORT}`);
})