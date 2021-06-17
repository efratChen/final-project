const express = require("express");
const route=express.Router();
const groupController=require("../controllers/Group");

route.get("/:id",groupController.getById)
route.get("/",groupController.getAll)
module.exports=route;
 