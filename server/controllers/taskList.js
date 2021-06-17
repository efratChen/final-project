const taskList = require("../models/taskList");
const mongoose = require("mongoose");
//get all contents by categoryId (for auto-correct):
//?
// אתר מצוין!!!:
// docs.mongodb.com
const getByCategoryId = async (req, res) => {
    let { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("המזההה קטגוריה שהתקבל אינו תקין");
    let taskList = await taskList.findById(id);
    if (!taskList)
        return res.status(404).send("מצטערים לא נמצאה תוכן עם המזהה שהתקבל");
    return res.send(taskList);
}
//user update his own list:
const updatetaskList = async (req, res) => {
    let taskListBody = req.body;
    let { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("המזההה שהתקבל אינו תקין");
    let taskList = await taskList.findByIdAndUpdate(id, {
        $set: { Content: taskListBody.Content },
    }, { new: true })
    if (!taskList)
        return res.status(404).send("מצטערים לא נמצאה תוכן עם המזהה שהתקבל");
    return res.send(taskList);
}
module.exports = {
    getByCategoryId, updatetaskList
}