const mongoose = require("mongoose");
mongoose.connect("").then(x => {
    console.log("connected to mongo");

}).catch(err => console.log(err.message));

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
