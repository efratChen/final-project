const express = require("express");
const route = express.Router();
const groupController = require("../controllers/group");

route.get("", groupController.getAll);
route.get("/:id", groupController.getById);

module.exports = route;