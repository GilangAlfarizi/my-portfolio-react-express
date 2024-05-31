const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    router = require('./routers'),
    cors = require('cors')

require('dotenv').config()

app.use(express.json({ strict : false}))
app.use(cors())
app.use('/images', express.static('public/images'))
app.use('/api', router)
app.get('*', (req, res) => {
    return res.status(404).json({
        error: 'endpoint is not registered'
    })
})

app.listen(port, () => {
    console.log(`server is running in port ${port}`)
})