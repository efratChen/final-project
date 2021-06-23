const mongoose = require("mongoose");
const listNotesSchema =require("../controllers/listNotes")
const listOpinionSchema = new mongoose.Schema({
    Opinion: {
        type: mongoose.SchemaTypes.Number, required: true
    },
    status: {
        type: mongoose.SchemaTypes.Number, required: true,
        min:0,
        max:2
    },
    //   //id user
    //   User: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref:'User'
    // }
    
});
const ListOpinion=mongoose.model("ListOpinion",listNotesSchema);
module.exports=ListOpinion;
