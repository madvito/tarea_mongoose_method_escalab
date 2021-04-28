const express = require('express');

const { 
  generarOrden,

} = require('../../controller/orden_controller');


const router = express.Router();



//Rutas
router.get('/orden/generar/:idUsuario', generarOrden);



module.exports = router;