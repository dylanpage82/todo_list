const apiController = {
    index(req, res, next){
        res.json(res.locals.data.toDos)
    },
    show(req, res, next){
        res.json(res.locals.data.toDo)
    }
}
module.exports = apiController