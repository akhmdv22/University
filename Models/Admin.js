const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
);

// Hash the password before saving it to the database


// Compare the given password with the hashed password in the database
adminSchema.methods.comparePassword = async function (password) {
  console.log(password, this.password)
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('Admin', adminSchema);