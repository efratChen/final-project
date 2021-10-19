const express = require("express");
const route = express.Router();
const categoeryController = require("../controllers/category");

route.get("/:id", categoeryController.getById);
route.get("", categoeryController.getAll);
route.get("/byName/:name", categoeryController.getByName);
route.post("/add", categoeryController.addCategory);
route.delete("/delete/:id", categoeryController.deleteCategory);
module.exports = route;
