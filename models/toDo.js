const {Schema, model} = require('mongoose')

const toDoSchema = new Schema({
    title: String,
    completed: Boolean,
},{
    timestamps:true
})

const ToDo = model('ToDo', toDoSchema)

module.exports = ToDo