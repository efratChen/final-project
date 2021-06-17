const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const category=require("./routes/category");

mongoose.connect("mongodb://localhost:27017/cakesdb").then(()=>{
    console.log("connected to mongoDB");
    
}
).catch(err=>{console.log(err);
})
const app = express();

app.use(express.json());
app.use("/category",category)
app.listen("3000", () => {
    console.log("listening on port 3000");
})

// git clone
