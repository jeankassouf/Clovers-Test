const express = require('express');
const route = new express.Router();
const authentication = require('../middleware/authantication')
const Student = require('../models/student')

// Create New Student
route.post('/student', authentication, async (req, res) => {
  const student = new Student(req.body)
  try {
    await student.save();
    res.status(200).send({
      student
    })
  } catch (ex) {
    res.status(404).send(ex);
  }
})

// Get Student Info By id
route.get('/student/:id', authentication, async (req, res) => {
  try {
    const student = await Student.findById(req.params.id)
    if (!student) {
      throw new Error()
    }
    res.status(200).send(student)
  } catch (ex) {
    res.status(404).send(ex)
  }
})

// Update Student Details By id
route.put('/student/:id', authentication, async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body
      }, {
      new: true
    })
    res.status(200).send(student)
  } catch (e) {
    res.status(404).send(e);
  }
})

module.exports = route;