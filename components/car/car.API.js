const express = require('express')
const router = express.Router({ caseSensitive: false })

const {
  registerCar,
  allCars,
  deleteCar,
  registerCarInHighway,
} = require('./controllers')

router.post('/car', registerCar)
router.get('/all', allCars)
router.delete('/car', deleteCar)
router.post('highway', registerCarInHighway)

module.exports = router
