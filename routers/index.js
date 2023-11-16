const express = require('express'),
    router = express.Router(),
    projectRouter = require('./projectRoutes'),
    imageRouter = require('./imageRoutes')

router.use('/project', projectRouter)
router.use('/image', imageRouter)

module.exports = router