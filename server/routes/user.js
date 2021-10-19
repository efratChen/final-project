var express = require("express");
const route = express.Router();
const userController = require("../controllers/user");
// var app = express();

route.get("/:id", userController.getById);
route.post("/add", userController.addUser);
route.get("", userController.getAll);
route.get("/byName/:name", userController.getByName);
route.delete("/delete/:id", userController.deleteUser);

// app.get('/login', function (req, res) {
//     res.send('GET request to the homepage')
//   });
module.exports = route;