var mongoose = require('mongoose');


var schemaCategoria = mongoose.Schema({

  categoria_nombre: {
    type: String,
    unique: 'xxxx'
  }

});

const model = mongoose.model('modelCategoria', schemaCategoria);

module.exports = model;

// Schemas   -> [Modelo]  -> Documento
