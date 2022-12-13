const express = require('express')
const router = express.Router()
const dataController = require('./dataController')
const apiController = require('./apiController')

router.get('/api', dataController.index, apiController.index)

router.delete('/api/:id', dataController.destroy, apiController.show)

router.put('/api/:id', dataController.update, apiController.show)

router.post('/api', dataController.create, apiController.show)

router.get('/api/:id', dataController.show, apiController.show)

module.exports = router