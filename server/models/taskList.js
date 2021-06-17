const mongoose = require('mongoose');

const taskListSchema =mongoose.Schema({
    Content: String, // String is shorthand for {type: String}
});

const taskList = mongoose.model("taskList", taskListSchema);

module.exports = taskList;
