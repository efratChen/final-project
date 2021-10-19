const ListNotes = require("../models/listNotes");
const mongoose = require("mongoose");


const addNote = async (req, res) => {
    let listNotes = req.body;
    let newlistNotes = new ListNotes(listNotes);
    try {
        await newlistNotes.save();
        return res.send(newlistNotes);
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
}

const deleteNote = async (req, res) => {
    let { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("המזההה שהתקבל אינו תקין");
    let deleted = await ListNotes.findByIdAndRemove(id);
    console.log(deleted);
    if (!deleted)
        return res.status(404).send("מצטערים לא נמצאה רשימה עם המזהה שהתקבל");
    return res.send(deleted);
}
module.exports = {
    addNote, deleteNote
}