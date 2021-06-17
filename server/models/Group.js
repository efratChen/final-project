const mongoose = require('mongoose');

const groupSchema = mongoose.Schema({
    Name: String, required: true, // String is shorthand for {type: String}
      //id המשתמש המנהל
        Users: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }]  
});

const Group = mongoose.model('Group', groupSchema);
module.exports=Group;
