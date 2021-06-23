const taskList = require("./taskList");
const ListNotes = require("./ListNotes");
const ListOpinion = require("./ListOpinion");
const mongoose = require("mongoose");
mongoose.connect("").then(x => {
    console.log("connected to mongo");

}).catch(err => console.log(err.message));

const listSchema = new mongoose.Schema({
    //?
    category :{
        type: String,
        required: true
    },
    group :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Group'
    },
    levelSharing: {
        type: Number,
        min: 0,
        max: 2
    },
    lockLevelSharing: {
        type: Number,
        min: 0,
        max: 1
    },
    user :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    //date
    name: String,
    ListContent: {
        type: [taskList], required: true
    },
    Opinions: [ListOpinion],    
    Notes: [ListNotes], 
});
const List = mongoose.model('List', listSchema);
module.exports=List;



// { 
//     category :"Sabat",
//     group : 747866545245,
//     levelSharing: 1,
//     lockLevelSharing: 1,
//     user :094396876,
//     name: "Shoping For Sabat",
//     Tasks: [
//         {Desction:"Halot", type: isDone:true}, 
//         {"Wine"}],
//     Opinions: [
//         {Opinion: 5, status: 0},        
//         {Opinion: 4, status: 0}],    
//     Notes: [{Note: "Very Good"}, {Note: "Please add Vegtables"}]
// }
