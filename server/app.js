const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const category = require("./routes/category");
const group = require("./routes/group");
const list = require("./routes/list");
const listNotes = require("./routes/listNotes");
const morgan = require("morgan")
const user = require("./routes/user");
// const { addUser } = require("./controllers/user");

mongoose.connect("mongodb://localhost:27017/list").then(() => {
    console.log(process.env.DATABASE || "connected to mongoDB");
        console.log("connected to mongo db")
    }).catch(err => {
    console.log(err);
});




const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/category", category); //vv
app.use("/group", group); //vv
app.use("/list", list); //vv
app.use("/listNotes", listNotes); //vv
app.use("/user", user); //?

// ??check
app.get('/express_backend',(req,res)=>{
    res.send({express: 'xxxx'})
});

app.listen(process.env.PORT || "3000", () => {
    console.log("listening on port 5000");
})


// רק בפעם הראשונה 
// git clone


//בכל פעם מחדש ????
// git add .
//git commit -m 
// git push 