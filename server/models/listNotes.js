const mongoose = require("mongoose");
const listNotesSchema = new mongoose.Schema({
    Note: {
        type: mongoose.SchemaTypes.String, required: true
    },
    // //id user
    // User: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref:'User'
    // }
});
const ListNotes = mongoose.model("ListNotes", listNotesSchema);
module.exports = ListNotes;
