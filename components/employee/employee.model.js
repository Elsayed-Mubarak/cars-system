const mongoose = require('mongoose')

const Employee = new mongoose.Schema(
  {
    name: { type: String, required: true },
    position: { type: String, required: true },
    age: { type: Number, required: true },
  },
  { timestamps: true },
)

module.exports = mongoose.model('Employee', Employee)
