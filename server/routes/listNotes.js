const express = require("express");
const route=express.Router();
const listNotesController=require("../controllers/listNotes");

route.post("/",listNotesController.addNote)
route.delete("/delete/:id",listNotesController.addNote)
module.exports=route;
