const ModelCategoria = require('./categoria_model');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const validator_categoria = async (val) =>{
  let rpta = await ModelCategoria.exists(
    { categoria_nombre : val }
  );
  
  return rpta;
  
}

var schemaProducto = new Schema({

  producto_nombre: {
    type: String,
    required: true,
    unique: true
  },
  descripcion: {
    type: String
  },
  precio: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    required: 'Stock Requerido'
  },
  vendidos: {
    type: Number,
    default: 0
  },
  disponible: {
    type: Boolean,
    default: true
  },
  categoria_nombre: {
    type: String,
    required: true,
    // validate:{
    //   validator: validator_categoria,
    //   message : 'Categoria no Existe !'
    // }
  },
  imagen: {
    data: Buffer,
    contentType: String 
  }
}, {
  timestamps: true
});


schemaProducto.path('categoria_nombre').validate(
  {
    validator: validator_categoria,
    message : 'Categoria no Existe  v2 !'
  }
);


//validators
//methods schema
//methods statics
//campos virtuales
//manejar Paths
// Override JSON

const model = mongoose.model('modelProducto', schemaProducto);

module.exports = model;