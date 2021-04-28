const express = require('express');
const app = express();


const data = [
  {
    id: 123,
    usuario: "user1"
  },{
    id: 124,
    usuario: "user2"
  }
];


//==========
//	Listar Usuarios
//==========

function listar(req, res) {
  res.json({
    data
  })
}


//==========
//	Guardar Usuarios
//==========
function guardar(req, res){
  res.json({
      message: "Guardado"
    })
}


//==========
// Borrar Usuarios 
//==========
function borrar(req, res){
  res.json({
      message: "Guardado"
    });
}

//==========
//	Actualizar Usuarios
//==========
function update(req, res){
res.json({
    message: "Guardado"
  });
}

module.exports = {
  listar,
  guardar,
  borrar,
  update
}

