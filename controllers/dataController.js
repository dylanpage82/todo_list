const ToDo = require('../models/toDo')

const dataController = {
    index(req, res, next) {
        ToDo.find({}, (err, allToDos) => {
            if(err){
                res.status(404).send({
                    msg: err.message
                })
            } else {
                res.locals.data.toDos = allToDos
                next()
            }
        })
    },
    destroy(req, res, next) {
        ToDo.findByIdAndDelete(req.params.id, (err, deleteTodo) => {
            if (err) {
                res.status(400).send({
                    msg: err.message
                })
            }else{
                res.locals.data.ToDo = deleteTodo
                next()
            }
        })
    },
    update (req, res, next) {
        req.body.completed = req.body.completed === 'on'
        ToDo.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedToDo) => {
          if (err) {
            res.status(400).send({
              msg: err.message
            })
          } else {
            res.locals.data.toDo = updatedToDo
            next()
          }
        })
      },
      // Create
      create (req, res, next) {
        req.body.completed = req.body.completed === 'on'
        
        ToDo.create(req.body, (err, createdToDo) => {
          
          if (err) {
            res.status(404).send({
              msg: err.message
            })
          } else {
            res.locals.data.toDo = createdToDo
            next()
          }
        })
      },
      show (req, res, next) {
        ToDo.findById(req.params.id, (err, foundToDo) => {
          if (err) {
            res.status(404).send({
              msg: err.message
            })
          } else {
            res.locals.data.toDo = foundToDo
            next()
          }
        })
      }
}
module.exports = dataController