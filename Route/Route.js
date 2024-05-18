const express = require("express");
const router = express.Router();
const Data = require('../Models/Data')
const traveladmindatas = require("../Models/AdminData")


router.get('/dashboard', async (req, res) => {
    // console.log("ccccccccccc")
  try {
    await Data.find({}).sort({ createdAt: -1 });
    res.send(data);
  } catch (err) {
    res.status(400).json({ message: err });    
  }
}); 

router.post("/makemytrip",async (req,res)=>{
try{
    console.log(req.body); 
    const dataToInsert = req.body
      if(Object.keys(dataToInsert).length != 0){
        // console.log("ff")
    await Data.insertMany(dataToInsert)
    .then((result) => {
      console.log(`${result.length} documents inserted successfully`);
      // Close the MongoDB connection
    //   mongoose.connection.close();
    })
    .catch((error) => {
      console.error('Error inserting data:', error);
      // Close the MongoDB connection
    //   mongoose.connection.close();
    });


res.status(200)  
  }
}catch(error){
res.status(404).json({
    message: "SOmething Went Wrong"
})
}

})


router.post("/login", async (req, res) => {
    const {email, password } = req.body;
    console.log( email, password );
    try{
        const users =   await traveladmindatas.findOne({ "Email": email, "Password": password})
    
    console.log("user", users)
    if (users!=null) {
        const currentUser = {
          email: users.Email
          // You can include additional user properties here if needed
        };
  
        res.status(200).json(currentUser);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    }
  catch(err){
    res.status(404).json({ 
      message: "Something Went wrong",
    });
  
  }
  });

 




module.exports = router;