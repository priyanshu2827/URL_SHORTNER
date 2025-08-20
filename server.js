import express from 'express'
import mongoose from 'mongoose';
import { shortUrl, getOriginalUrl } from "./controllers/url.js";

const app = express();

app.use(express.urlencoded({extended:true}))

mongoose
  .connect(
    "mongodb+srv://priyanshusakharkar2827:kq9wpDxaQjjjHgWg@cluster0.qqwkduc.mongodb.net/",
    {
      dbName: "NodeJs_Mastery_Course",
    }
  )
  .then(() => console.log("MongoDb Connected..!"))
  .catch((err) => console.log(err));


  // rendering the ejs file
  app.get('/',(req,res)=>{
    res.render("index.ejs", {shortUrl :null})
  })

  // shorting url logic
  app.post('/short',shortUrl)

  // redirect to original url using short code :- dynamic routing
  app.get("/:shortCode", getOriginalUrl);
  // app.get kyuki humhe data base voh read karna hoga 
  // jab bhi shortCode aayega toh usko getOriginalUrl function mei bhej do

const port = 1000;
app.listen(port,()=>console.log(`server is running on port ${port}`))

/*
// how logic flow  around 
1. app.get mei rendering the index.ejs file through /  jisse index.js file render ho jata hai action ke through
2. phir submit karne ke baad Server.js mei /short route call hota hai jaha shortUrl function call hota hai
*/