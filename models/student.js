const mongoose = require('mongoose');

const student = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  age: {
    type: Number
  },
  major: {
    type: String
  },
  skills: {
    type: String
  },
  addressCountry: {
    type: String
  },
  city: {
    type: String
  },
  postcode: {
    type: Number
  },
  additionalInfo: {
    type: String
  },
  //We can have a collection for diplomas informations because student can have multiple diplomas
  diplomas: {
    type: String
  },
  yearOfGraduation: {
    type: Number,
  },
  school: {
    type: String
  },
  educationCountry: {
    type: String
  }, createdDate: {
    type: String,
    default: Date.now()
  },
})

const Student = mongoose.model('Student', student)
module.exports = Student