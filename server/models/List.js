
const taskList = require("../models/taskList");
const ListNotes = require("../models/ListNotes");
const ListOpinion = require("../models/ListOpinion");
const mongoose = require('mongoose');

const ListSchema = mongoose.Schema({
    category: {
        type: String,
    },
    group: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group'
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
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    //date
    name: String,


    ListContent: [{
        ref: 'taskList',
        //type: [taskList],
        required: true
    }],
    Opinions: [ListOpinion],
    Notes: [ListNotes],
});
const List = mongoose.model('List', ListSchema);
module.exports = List;



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
