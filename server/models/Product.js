const mongoose = require ('mongoose');

const productSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: true,
    minlength: [2, 'The product name must consist of 2 letters at least'],
    maxlength: [30, 'The product name can not be more than 30 letters'],
    unique: true,
  },
  description: {
    type: String,
    required: true,
    minlength: [
      10,
      'The product description must consist of 10 letters at least',
    ],
    maxlength: [
      500,
      'The product description can not be more than 300 letters',
    ],
    unique: false,
  },
  price: {
    type: Number,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  added: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model ('Product', productSchema);
