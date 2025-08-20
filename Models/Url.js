import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    shortCode:String,
    longUrl:String // long url matlad uske baad ke ending ke link koh convert karta with some other think usko hei shortern bolte hai 
})

export const Url = mongoose.model("shortUrl",urlSchema) // phele naam dene ka phir schema pass karte hai


// BIG ISSUE : NAME KEPT HERE AND  EXPORT KA JAB IMPORT KAREGE SHOULD BE SAME IN SERVER.JS FILE