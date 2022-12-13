const mongoose = require('mongoose')

const toDoSchema = new mongoose.Schema({
    title: {type: String, required: true},
    completed: Boolean,
})
const ToDo = mongoose.model('ToDo', toDoSchema)

module.exports = ToDo