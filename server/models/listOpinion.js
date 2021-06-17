const mongoose = require('mongoose');

const ListOpinionSchema = mongoose.Schema({
    Opinion: Number, // String is shorthand for {type: String}
    status:Number,

});

const ListOpinion=mongoose.model("ListOpinion",ListOpinionSchema);
module.exports=ListOpinion;
