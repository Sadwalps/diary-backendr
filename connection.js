//import mongoose 
const mongoose = require('mongoose')
const dns = require('dns')
dns.setServers(["1.1.1.1", "8.8.8.8"]);

connectionString = process.env.DATABASE

mongoose.connect(connectionString).then(() => {
    console.log(`MongoDB connected successfully`);

}).catch((err) => {
    console.log(`MongoDB connection failed due to ${err}`);

})