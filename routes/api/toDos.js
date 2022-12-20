const express = require('express')
const router = express.Router()
const { dataController, apiController } = require('../../controllers/api/toDos')


router.get('/', dataController.index, apiController.index)

router.delete('/:id', dataController.destroy, apiController.show)

router.put('/:id', dataController.update, apiController.show)

router.post('/', dataController.create, apiController.show)

router.get('/:id', dataController.show, apiController.show)


module.exports = router