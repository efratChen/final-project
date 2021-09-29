const express = require("express");
const route=express.Router();
const listController=require("../controllers/list");

route.get("/:id",listController.getByIdCategory)
route.post("/",listController.addList)
route.delete("/delete/:id",listController.deleteList)
module.exports=route;
