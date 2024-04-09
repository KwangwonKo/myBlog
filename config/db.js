const mongoose=require("mongoose");
const asynchandler = require("express-async-handler");
require("dotenv").config();
const connectDb=asynchandler(async()=>{
    // .env 파일에 있는 mongodb_uri값을 이용해 접속
    const connect = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`DB connectd: ${connect.connection.host}`);
})
module.exports=connectDb;