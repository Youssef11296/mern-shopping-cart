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
      300,
      'The product description can not be more than 300 letters',
    ],
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model ('Product', productSchema);
