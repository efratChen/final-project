const Group = require("../models/group");
const List = require("../models/list");
const mongoose = require("mongoose");
//#region GET
const getAll = async (req, res) => {
    //.populate?
    // let cakes = await Cake.find().populate({ path: "cheff", select: "name sallary -_id" });
    // return res.send(cakes);
    try {
        let groups = await Group.find();
        return res.send(groups);
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
}
const getById = async (req, res) => {
    let { id } = req.params;
    let group = await Group.findById(id);
    if (!group)
        return res.status(404).send("sorry the id you have been enter not valid!");
    return res.send(group);
}

const getGroupByUserId = async (req, res) => {
    let { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("המזההה שהתקבל אינו תקין");
    let group = await Group.findById(id);
    if (!group)
        return res.status(404).send("מצטערים לא נמצאה קבוצה עם המזהה שהתקבל");
    return res.send(group);
}
//#endregion
//#region POST
// להוסיף קבוצה לתת אפשרות רק לשתמש המנהל = שפתח את הקבוצה
//? id - צריך לקבל גם את ה
//של המשתמש
const addGroup = async (req, res) => {
    let group = req.body;
    let newGroup = new Group(group);
    try {
        await newGroup.save();
        return res.send(newGroup);
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
}
//#endregion
//? PUT?
//#region DELETE
const deleteGroup = async (req, res) => {
    let { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("המזההה שהתקבל אינו תקין");
    let deleted = await Group.findByIdAndRemove(id);
    console.log(deleted);
    if (!deleted)
        return res.status(404).send("מצטערים לא נמצאה קבוצה עם המזהה שהתקבל");
    return res.send(deleted);
}
//#endregion
module.exports = {
    getById, deleteGroup, addGroup
}
