const ListNotes = require("../models/listNotes");
const mongoose = require("mongoose");

// const getAll = async (req, res) => {
//     let listNotes = await listNotes.find();
//     return res.send(listNotes);
// }
//ok
//hi rivka just for checking
const addNote = async (req, res) => {
    let listNotes = req.body;
    let newlistNotes = new listNotes(listNotes);
    try {
        await newlistNotes.save();
        return res.send(newlistNotes);
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
}
module.exports = {
    addNote
}