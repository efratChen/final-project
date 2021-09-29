const Category = require("../models/category");
const mongoose = require("mongoose");

//#region GET
const getAll = async (req, res) => {
    try {
        let categorys = await Category.find();
        return res.send(categorys);
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
}
const getById = async (req, res) => {
    let { id } = req.params;
    let category = await Category.findById(id);
    if (!category)
        return res.status(404).send("sorry the id iyou have been enter not valid!");
    return res.send(category);
    // if (!mongoose.Types.ObjectId.isValid(id))
    //     return res.status(404).send("המזהה קטגוריה שהתקבל אינו תקין");
    // let contentList = await contentList.findById(id);
    // if (!contentList)
    //     return res.status(404).send("מצטערים לא נמצאה תוכן עם המזהה שהתקבל");
    // return res.send(contentList);
}

const getByName = async (req, res) => {
    let n = req.params.name;
    let category = await Category.find({ name: n });
    if (!category)
        return res.status(404).send("sorry the name is not exists!");
    return res.send(category);
}

// להוסיף קטגוריה לתת אפשרות רק למנהל
const addCategory = async (req, res) => {
    let category = req.body;
    let newCategory = new Category(category);
    try {
        await newCategory.save();
        return res.send(newCategory);
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
}
//#endregion
//PUT ?
//#region DELETE
// למחוק קטגוריה לתת אפשרות רק למנהל
const deleteCategory = async (req, res) => {
    let { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("המזההה שהתקבל אינו תקין");
    let deleted = await Category.findByIdAndRemove(id);
    console.log(deleted);
    if (!deleted)
        return res.status(404).send("מצטערים לא נמצאה קבוצה עם המזהה שהתקבל");
    return res.send(deleted);
}
//#endregion
module.exports = {
    getByName, getById, getAll, addCategory, deleteCategory
}
