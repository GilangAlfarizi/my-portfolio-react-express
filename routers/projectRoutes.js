const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/projectsController')

router.post('/create', controller.create)
router.put('/:id', controller.update)
router.get('/:id', controller.getId)
router.get('/', controller.getAll)
router.delete('/:id', controller.delete)

module.exports = router