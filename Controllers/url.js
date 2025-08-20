import { Url } from "../Models/Url.js"
import shortid from "shortid";
// datta idhar request through body ke through aata hai

export const shortUrl = async (req,res)=>{
 const longUrl = req.body.longUrl; //request.body toh hei lakin index.ejs ke form mei joh test box mei long urls mei name diya hai na vaha se aaraha hai yei 
 const shortCode = shortid.generate();

 const shortUrl = `http://localhost:1000/${shortCode}` // starting mei localhost:1000 isliye likha hai kyuki hamara server localhost:1000 pe run ho raha hai aur humhe isko manually karna hoga

 // save to database
 const newUrl = new Url({shortCode,longUrl})
 await newUrl.save();

 console.log("short saved = ",newUrl)

 res.render("index.ejs",{shortUrl});

}

export const getOriginalUrl = async (req,res) =>{
  const shortCode = req.params.shortCode// app.get("/:shortCode", getOriginalUrl);(its is link  with name of ) // parameter param matlab localhost ke baad joh bhi short code aata hai 

  // find on database vaps humhe long url dena hai na isliye 
  const originalUrl = await Url.findOne({shortCode})

  if(originalUrl){
    res.redirect(originalUrl.longUrl);
  }else{

      res.json({ message:"Invalid shortcode" });
  }

}