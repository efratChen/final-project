const Group = require("../models/group");
const List = require("../models/List");
//const ListSharing = require("../models/ListSharing").model;
const mongoose = require("mongoose");
//#region Get

const getAll = async (req, res) => {
    // let cakes = await Cake.find().populate({ path: "cheff", select: "name sallary -_id" });
    //?
    let groups = await Group.find();
    return res.send(groups);
}

//#endregion

const getById = async (req, res) => {
    let { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("המזההה שהתקבל אינו תקין");
    let group = await Group.findById(id);
    if (!group)
        return res.status(404).send("מצטערים לא נמצאה קבוצה עם המזהה שהתקבל");
    return res.send(group);
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
module.exports = {
    getById, deleteGroup, getAll
}