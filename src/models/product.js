const { Schema, model  } = require('mongoose');

const ProductSchema =  Schema({

  name: {
    type: String,
    required: [true, "El nombre es obligatorio"],
    unique: true,
  },

  description: {
    type: String,
    default: "Descripción del producto",
  },

  image: {
    type: String,
    default: "https://res.cloudinary.com/dgvdlmprt/image/upload/v1665599877/products-doodle/DOODLE-NO-DISPONIBLE_yew7lr.png",
  },

  price: {
    type: Number,
  }
  
});

module.exports = model('producto', ProductSchema);