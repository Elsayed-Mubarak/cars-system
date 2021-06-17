const express = require('express')
const router = express.Router({ caseSensitive: false })
const { balance } = require('./controllers')

router.post('/balance', balance)

module.exports = router