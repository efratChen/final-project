const User = require("../models/user");
const mongoose = require("mongoose");
//#region GET
const getAll = async (req, res) => {
    try {
        let users = await User.find();
        return res.send(users);
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
}

const getById = async (req, res) => {
    let { id } = req.params;
    let user = await User.findById(id);
    if (!user)
        return res.status(404).send("sorry the id iyou have been enter not valid!");
    return res.send(user);
}
const getByName = async (req, res) => {
    let n = req.params.name;
    let user = await User.find({ name: n });
    if (!user)
        return res.status(404).send("sorry the name is not exists!");
    return res.send(user);
}
//#endregion
//#region POST
const postUser= async (req, res) => {
    let user = req.body;
    let newUser = new User(user);
    try {
        await newUser.save();
        return res.send(newUser);
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
}
//#endregion
//#region PUT?

//#endregion
//#region DELETE
//  לתת אפשרות רק למנהל
const deleteUser = async (req, res) => {
    let { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("המזההה שהתקבל אינו תקין");
    let deleted = await User.findByIdAndRemove(id);
    console.log(deleted);
    if (!deleted)
        return res.status(404).send("מצטערים לא נמצאה קבוצה עם המזהה שהתקבל");
    return res.send(deleted);
}
//#endregion
module.exports = {
    getAll, getById, postUser, getByName, deleteUser
}
