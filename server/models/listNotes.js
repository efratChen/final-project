const mongoose = require('mongoose');

const mongoose = require("mongoose");
const ListNotesSchema = mongoose.Schema({
    Note: {
        type: String
    },
    // //id user
    // User: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref:'User'
    // }
});
const ListNotes=mongoose.model("ListNotes",ListNotesSchema);
module.exports=ListNotes;
