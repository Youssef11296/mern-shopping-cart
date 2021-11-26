const mongoose = require ('mongoose');

const cartSchema = new mongoose.Schema ({
  products: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model ('Cart', cartSchema);
