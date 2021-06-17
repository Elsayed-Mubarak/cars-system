const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const mongoSanitize = require('express-mongo-sanitize') // for nosql injection
const cookieParser = require('cookie-parser')
const { CarAPI } = require('./components/car')
const { AccessAPI } = require('./components/access-card')

const app = express()
app.use(express.json())

// database connection
mongoose.connect(
  'mongodb://127.0.0.1:27017/cars-system',
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  () => {},
)
// ====================== body parser ======================
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
)
app.use(bodyParser.json())
// ====================== Cookie Parser ======================
app.use(cookieParser('car-system'))
// ====================== Mongo Sanitize ======================
// Data sanitization against NoSQL Query injection
app.use(mongoSanitize()) // prevent from NoSQL injection like (email:{"$gt":""}) in body

app.use('/api/car', CarAPI)
app.use('/api/card',AccessAPI)
const port = 3000

app.listen(port, () => {
  console.log(' Server is running now ...')
})
