const mongoose = require('mongoose');

// block, room, msg

const messageSchema = new mongoose.Schema({
      block: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 1,
      },
      room: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 3,
      },
      message: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1000
      },
      createdAt: {
        type: Date,
        default: Date.now
      },
});

module.exports = mongoose.model('Message', messageSchema);