const Category = require("../models/category");
const mongoose = require("mongoose");
//#region Get
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
//#endregion
//#region Post
// להוסיף קטגוריה לתת אפשרות רק למנהל
const postCategory = async (req, res) => {
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
module.exports = {
    getByName, getById, getAll, postCategory
}
