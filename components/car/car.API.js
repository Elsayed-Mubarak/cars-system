const express = require('express')
const router = express.Router({ caseSensitive: false })

const { registerCar, allCars, deleteCar } = require('./controllers')

router.post('/register-car', registerCar)
router.get('/all', allCars)
router.delete('/car', deleteCar)

module.exports = router