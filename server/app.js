const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const category = require("./routes/category");
const group = require("./routes/group");

const user = require("./routes/user");


mongoose.connect("mongodb://localhost:27017/list").then(() => {
    console.log("connected to mongoDB");
}
).catch(err => {
    console.log(err);
})
const app = express();

app.use(express.json());
//app.use("/user",user)
app.use("/category", category);
app.use("/group", group);

app.listen("6000", () => {
    console.log("listening on port 5000");
})
// רק בפעם הראשונה 
// git clone




//בכל פעם מחדש ????
// git add .
//git commit -m 
//git push 