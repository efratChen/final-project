const express = require("express");
const route = express.Router();
const categoeryController = require("../controllers/Category");

route.get("/:id", categoeryController.getById);
route.get("", categoeryController.getAll);
route.get("/byName/:name", categoeryController.getByName);
route.post("/add",categoeryController.addCategory);
module.exports = route;
