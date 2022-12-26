const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
   description:{
      type: String,
      required: [true, 'must provide name of the Task'],
      
   },
   completed: Boolean
})

const model = mongoose.model('Task', TaskSchema)
module.exports = model

