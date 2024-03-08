const mongoose = require("mongoose");
require('dotenv').config();

const dbConnect = async () => {
  try{
    const connect = await mongoose.connect(process.env.DB_LOCAL_URL);
    console.log("DB connect");
  }catch(err){
    console.log(err);
  }
}

module.exports = dbConnect;