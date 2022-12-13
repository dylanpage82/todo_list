require('dotenv').config()

const db = require('./db')
const ToDo = require('./toDo')

const starterToDos = [
    {
      title: "Learn more about React",
      completed: true
    },
    {
      title: "Write a new Component",
      completed: false
    },
    {
      title: "Add some style",
      completed: false
    }
  ]
  ToDo.deleteMany({})
    .then(() => {
      ToDo.create(starterToDos)
        .then((createdToDos) =>{
            console.log('created toDos:', createdToDos)
            db.close()
        })  
        .catch(err =>{
            console.log(err)
            db.close()
        })
    }).catch(err => {
        console.log(err)
        db.close()
    })
