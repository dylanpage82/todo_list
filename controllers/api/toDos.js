const ToDo = require('../../models/toDo')

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
        ToDo.findByIdAndDelete(req.params.id, (err, deletedTodo) => {
            if (err) {
                res.status(400).send({
                    msg: err.message
                })
            }else{
                res.locals.data.ToDo = deletedTodo
                next()
            }
        })
    },
    update (req, res, next) {
    
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
        req.body.completed = req.body.completed === 'on' || req.body.completed === true ? true : false
        
        ToDo.create(req.body, (err, createdToDo) => {
      
          if (err) {
            res.status(400).send({
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

const apiController = {
    index(req, res, next){
        res.json(res.locals.data.toDos)
    },
    show(req, res, next){
        res.json(res.locals.data.toDo)
    }
}
module.exports = {dataController, apiController}