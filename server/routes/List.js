const express = require("express");
const route=express.Router();
const listController=require("../controllers/list");

route.get("/:id",listController.getById)
route.post("/",listController.addCake)
route.delete("/:id",listController.deleteCake)
module.exports=route;
