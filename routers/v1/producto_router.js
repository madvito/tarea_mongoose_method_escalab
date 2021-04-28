const express = require('express');

const { 
  getxId,
  listar, 
  guardar, 
  borrar, 
  update,
  productoById ,
  imagen
} = require('../../controller/producto_controller');


const router = express.Router();

//Params
//Middleware  - Router
router.param('productoIdxxxxxx', productoById);


//Rutas
router.get('/producto', listar);
router.get('/producto/:productoIdxxxxxx', getxId);
router.get('/producto/imagen/:productoIdxxxxxx', imagen);
router.post('/producto', guardar);
router.delete('/producto/:productoIdxxxxxx', borrar); 
router.put('/producto/:id', update); 

module.exports = router;