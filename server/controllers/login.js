const User = require("../models/user");
// const mongoose = require("mongoose");

const login = async (req, res) => {
    console.log(req.params);
    User.findOne({ userName: req.params.name, password: req.params.password })
        .then((user) => {
            console.log('user', user);
            const token = jwt.sign({ _id: user._id }, process.env.MY_SECRET)
            res.status(200).json({ user, token })
        })
        .catch(err => res.status(404).send('not found user'))

}
module.exports = login;