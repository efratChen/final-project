const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({

    name: String,
    //id המשתמש המנהל
    Users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});
const Group = mongoose.model('Group', groupSchema);
module.exports=Group;
