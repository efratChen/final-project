const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require("cors");

const app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

const { sendEmail } = require('./mail');

// /api
app.post("/api/sendMail", (req, res) => {

    console.log("frm index.js server   ",req.body)
    console.log(" from    ---   app.post/api/sendMail")
    sendEmail(req.body.email, req.body.name, "hello")

})
app.listen(5000,  () => {
    console.log("Server Running at 5000 ");
})
// // אסתר
// app.listen(3000,  () => {
//     console.log("Server Running at 3000 ");
// })
