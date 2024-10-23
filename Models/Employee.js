const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        trim: true
      },
      surname: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        trim: true
      },
      phone: {
        type: String,
        required: true,
        unique: true,
        minlength: 4,
        maxlength: 20
      }
});

module.exports = mongoose.model('Employee', employeeSchema);