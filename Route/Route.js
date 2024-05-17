const express = require("express");
const router = express.Router();
const Data = require('../Models/Data')
const traveladmindatas = require("../Models/AdminData")


router.get('/dashboard', async (req, res) => {
    // console.log("ccccccccccc")
  try {
    const data = await Data.find({});  
    res.send(data);
  } catch (err) {
    res.status(400).json({ message: err });    
  }
}); 

router.post("/makemytrip",async (req,res)=>{
try{
    console.log(req.body); 
    const dataToInsert =  [
      {
        fullName: "John Doe",
        email: "john.doe1@example.com",
        phoneNumber: "123-456-7890",
        duration: "7 days",
        date: "2024-06-01",
        budget: "$1000 - $2000", 
        selectedFilters: {
          countries: [{ value: "USA" }, { value: "Canada" }],
          places: [{ value: "New York" }, { value: "Toronto" }],
          cost: "$1000 - $2000",
          people: "2 travelers"
        }
      },
      {
        fullName: "Jane Smith",
        email: "jane.smith2@example.com",
        phoneNumber: "123-456-7891",
        duration: "10 days",
        date: "2024-06-15",
        budget: "$1500 - $2500",
        selectedFilters: {
          countries: [{ value: "France" }, { value: "Italy" }],
          places: [{ value: "Paris" }, { value: "Rome" }],
          cost: "$1500 - $2500",
          people: "3 travelers"
        }
      },
      {
        fullName: "Alice Johnson",
        email: "alice.johnson3@example.com",
        phoneNumber: "123-456-7892",
        duration: "5 days",
        date: "2024-07-01",
        budget: "$1000 - $1500",
        selectedFilters: {
          countries: [{ value: "Spain" }, { value: "Portugal" }],
          places: [{ value: "Madrid" }, { value: "Lisbon" }],
          cost: "$1000 - $1500",
          people: "2 travelers"
        }
      },
      {
        fullName: "Bob Brown",
        email: "bob.brown4@example.com",
        phoneNumber: "123-456-7893",
        duration: "14 days",
        date: "2024-07-10",
        budget: "$2500 - $3500",
        selectedFilters: {
          countries: [{ value: "Japan" }, { value: "South Korea" }],
          places: [{ value: "Tokyo" }, { value: "Seoul" }],
          cost: "$2500 - $3500",
          people: "3 travelers"
        }
      },
      {
        fullName: "Charlie Davis",
        email: "charlie.davis5@example.com",
        phoneNumber: "123-456-7894",
        duration: "7 days",
        date: "2024-08-01",
        budget: "$1500 - $2000",
        selectedFilters: {
          countries: [{ value: "Australia" }, { value: "New Zealand" }],
          places: [{ value: "Sydney" }, { value: "Auckland" }],
          cost: "$1500 - $2000",
          people: "2 travelers"
        }
      },
      {
        fullName: "Diana Evans",
        email: "diana.evans6@example.com",
        phoneNumber: "123-456-7895",
        duration: "10 days",
        date: "2024-08-15",
        budget: "$2000 - $3000",
        selectedFilters: {
          countries: [{ value: "Germany" }, { value: "Switzerland" }],
          places: [{ value: "Berlin" }, { value: "Zurich" }],
          cost: "$2000 - $3000",
          people: "3 travelers"
        }
      },
      {
        fullName: "Ethan Foster",
        email: "ethan.foster7@example.com",
        phoneNumber: "123-456-7896",
        duration: "12 days",
        date: "2024-09-01",
        budget: "$2500 - $3000",
        selectedFilters: {
          countries: [{ value: "Brazil" }, { value: "Argentina" }],
          places: [{ value: "Rio de Janeiro" }, { value: "Buenos Aires" }],
          cost: "$2500 - $3000",
          people: "2 travelers"
        }
      },
      {
        fullName: "Fiona Green",
        email: "fiona.green8@example.com",
        phoneNumber: "123-456-7897",
        duration: "8 days",
        date: "2024-09-15",
        budget: "$1500 - $2000",
        selectedFilters: {
          countries: [{ value: "Mexico" }, { value: "Cuba" }],
          places: [{ value: "Cancun" }, { value: "Havana" }],
          cost: "$1500 - $2000",
          people: "2 travelers"
        }
      },
      {
        fullName: "George Harris",
        email: "george.harris9@example.com",
        phoneNumber: "123-456-7898",
        duration: "6 days",
        date: "2024-10-01",
        budget: "$1200 - $1600",
        selectedFilters: {
          countries: [{ value: "Thailand" }, { value: "Vietnam" }],
          places: [{ value: "Bangkok" }, { value: "Hanoi" }],
          cost: "$1200 - $1600",
          people: "2 travelers"
        }
      },
      {
        fullName: "Hannah Ingram",
        email: "hannah.ingram10@example.com",
        phoneNumber: "123-456-7899",
        duration: "9 days",
        date: "2024-10-15",
        budget: "$2000 - $2500",
        selectedFilters: {
          countries: [{ value: "South Africa" }, { value: "Kenya" }],
          places: [{ value: "Cape Town" }, { value: "Nairobi" }],
          cost: "$2000 - $2500",
          people: "3 travelers"
        }
      },
      {
        fullName: "Ian Jackson",
        email: "ian.jackson11@example.com",
        phoneNumber: "123-456-7810",
        duration: "11 days",
        date: "2024-11-01",
        budget: "$2200 - $2800",
        selectedFilters: {
          countries: [{ value: "China" }, { value: "India" }],
          places: [{ value: "Beijing" }, { value: "Delhi" }],
          cost: "$2200 - $2800",
          people: "2 travelers"
        }
      },
      {
        fullName: "Jackie King",
        email: "jackie.king12@example.com",
        phoneNumber: "123-456-7811",
        duration: "13 days",
        date: "2024-11-15",
        budget: "$2700 - $3200",
        selectedFilters: {
          countries: [{ value: "Russia" }, { value: "Turkey" }],
          places: [{ value: "Moscow" }, { value: "Istanbul" }],
          cost: "$2700 - $3200",
          people: "3 travelers"
        }
      },
      {
        fullName: "Kevin Lee",
        email: "kevin.lee13@example.com",
        phoneNumber: "123-456-7812",
        duration: "15 days",
        date: "2024-12-01",
        budget: "$3000 - $4000",
        selectedFilters: {
          countries: [{ value: "Egypt" }, { value: "Morocco" }],
          places: [{ value: "Cairo" }, { value: "Marrakech" }],
          cost: "$3000 - $4000",
          people: "2 travelers"
        }
      },
      {
        fullName: "Laura Miller",
        email: "laura.miller14@example.com",
        phoneNumber: "123-456-7813",
        duration: "7 days",
        date: "2024-12-15",
        budget: "$1500 - $2000",
        selectedFilters: {
          countries: [{ value: "Greece" }, { value: "Cyprus" }],
          places: [{ value: "Athens" }, { value: "Nicosia" }],
          cost: "$1500 - $2000",
          people: "2 travelers"
        }
      }
    ]

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