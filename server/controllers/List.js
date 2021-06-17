const Group = require("../models/Group");
const List = require("../models/List");
const taskList = require("../models/taskList");
const mongoose = require("mongoose");

const getAll = async (req, res) => {
    let lists = await List.find();
    return res.send(lists);
}

const getById = async (req, res) => {
    let { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("המזההה שהתקבל אינו תקין");
    let list = await List.findById(id);
    if (!list)
        return res.status(404).send("מצטערים לא נמצאה רשימה עם המזהה שהתקבל");
    return res.send(list);
}

// const addGroup = async (req, res) => {
//     let group = req.body;
//     let newGroup = new Group(group);
//     let cheff = await Cheff.findById(group.cheff);
//     if (!cheff)
//         return res.status(404).send("מצטערים לא נמצא שף עם המזהה שהתקבל");
//     try {
//         await newCake.save();
//         let ing = newCake.ingredients;
//         console.log(newCake)
//         // ing.forEach(async (item) => {
//         //     let newIng = new Ingredients(item);
//         //     newIng._id=item._id;
//         //     await newIng.save();
//         //     console.log(newIng);
//         // })
//         return res.send(newCake);
//     }
//     catch (err) {
//         return res.status(400).send(err.message)
//     }
// }


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

module.exports = {
    getAll, getById, addGroup, deleteGroup, updateCake
}