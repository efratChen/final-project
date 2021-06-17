const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    Name: String // String is shorthand for {type: String}
});

const Category=mongoose.model("Category",CategorySchema);
module.exports=Category;
