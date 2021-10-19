const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    userName: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    password: {
        type: mongoose.SchemaTypes.String,
        required: true
    },

     mail: {
        // type: mongoose.SchemaTypes.String, required: true
            type: String,
            // required: true,
            match: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, "please enter a valid email!"],
            // unique: true,
            message: '{VALUE} is not supported'
        }
    //,
    //  opinionDate: Date
});
const User = mongoose.model("User", userSchema);
module.exports = User;
