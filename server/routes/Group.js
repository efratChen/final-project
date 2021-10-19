const express = require("express");
const route=express.Router();
const groupController=require("../controllers/group");

route.get("/:id",groupController.getById)
route.delete("/delete/:id", groupController.deleteGroup);
route.post("/add", groupController.addGroup);
module.exports=route;