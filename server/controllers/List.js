const Group = require("../models/group");
const List = require("../models/list");
const TaskList = require("../models/taskList");
// const ListSharing = require("../models/ListSharing").model;
const mongoose = require("mongoose");

const getByIdCategory = async (req, res) => {
    let { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("המזההה שהתקבל אינו תקין");
    let list = await List.schema.category.findById(id);
    if (!list)
        return res.status(404).send("מצטערים לא נמצאה רשימה עם המזהה שהתקבל");
    return res.send(list);
}

const deleteList = async (req, res) => {
    let { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("המזההה שהתקבל אינו תקין");
    let deleted = await List.findByIdAndRemove(id);
    console.log(deleted);
    if (!deleted)
        return res.status(404).send("מצטערים לא נמצאה רשימה עם המזהה שהתקבל");
    return res.send(deleted);
}

const addList = async (req, res) => {
    let list = req.body;
    let newList = new List(list);
    try {
        await newList.save();
        return res.send(newList);
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
}
module.exports = {
    getByIdCategory, addList, deleteList
}