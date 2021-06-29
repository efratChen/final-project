const express = require("express");
const route = express.Router();
const categoeryController = require("../controllers/category");

route.get("/:id", categoeryController.getById);
route.get("", categoeryController.getAll);
route.get("/byName/:name", categoeryController.getByName);
route.post("/post", categoeryController.postCategory);
module.exports = route;
