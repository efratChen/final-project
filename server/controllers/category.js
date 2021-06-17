const Category = require("../models/category");
const mongoose = require("mongoose");

const getAll = async (req, res) => {
    let categorys = await Category.find();
    return res.send(categorys);
}

const getById = async (req, res) => {
    let { id } = req.params;
    let category=await Category.findById(id);
    if(!category)
    return res.status(404).send("sorry the id iyou have been enter not valid!");
    return res.send(category);
    // if (!mongoose.Types.ObjectId.isValid(id))
    //     return res.status(404).send("המזהה קטגוריה שהתקבל אינו תקין");
    // let contentList = await contentList.findById(id);
    // if (!contentList)
    //     return res.status(404).send("מצטערים לא נמצאה תוכן עם המזהה שהתקבל");
    // return res.send(contentList);
}
module.exports = {
    getById, getAll
}
