const express = require("express");
const dotenv = require('dotenv');
const app = express();
const connectionDB = require("./Config/Config")
const router = require("./Route/Route")
const cors = require("cors")


dotenv.config()
connectionDB();
const port = process.env.PORT || 8080
 
 app.use(express.json());
app.use(cors());


app.use('/travel', router);
app.use("/adminpannel", router); 
app.use("/admin", router); 

app.listen(port, ()=>{
    console.log(`server is running ${process.env.NODE_ENV} on port ${process.env.PORT}`)
}) 