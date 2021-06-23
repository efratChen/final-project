
const mongoose = require("mongoose");
const taskListSchema = new mongoose.Schema({
    Content: {
        type: mongoose.SchemaTypes.String, required: true
    },
    //task type 
    //date אם זה מסוג משימה אז צריך 
    // date ואם זה מסוג קניה אז לא צריך 
    //date 
    // אם זה קבוצה 
    //assgine to מי מהקבוצה יבצע את המשימה
    //is done
    //id list
});
const taskList=mongoose.model("taskList",taskListSchema);
module.exports=taskList;