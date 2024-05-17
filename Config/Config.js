const mongoose= require("mongoose");



const connectionDB=async()=>{
  try{
    const url = process.env.MONGO_URI
    const conn = await mongoose.connect(url,{

    })

    console.log(`Mongodb database connected ${conn.connection.host}`)
  }catch(error){
    console.log(`error${error.message}`)
  }

};

module.exports= connectionDB;
