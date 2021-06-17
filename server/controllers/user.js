const User = require("../models/chef");
const mongoose = require("mongoose");
const getAll = async (req, res) => {
    let Users = await User.find();
    return res.send(Users);
}
const getById = async (req, res) => {
    let { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("user id is Invalid");
    let User = await User.findById(id);
    if (!User)
        return res.status(404).send("מצטערים לא נמצאה משתמש עם המזהה שהתקבל");
    return res.send(User);
}
const addUser= async (req, res) => {
    let User = req.body;
    let newUser = new User(User);
    try {
        await newUser.save();
        return res.send(newUser);
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
}
module.exports = {
    getAll, getById,addUser
}