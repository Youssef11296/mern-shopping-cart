const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema (
  {
    name: {
      type: String,
      minlength: 2,
      maxlength: 30,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      minlength: 10,
      maxlength: 30,
      required: true,
    },
  },
  {timestamps: true}
);

module.exports = mongoose.model ('User', userSchema);
