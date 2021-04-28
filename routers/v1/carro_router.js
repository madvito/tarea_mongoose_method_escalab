const express = require('express');

const { 
  addCarro,
  listarCarro,
  clearCarr,
  removeCarro
} = require('../../controller/carro_controller');


const router = express.Router();



//Rutas
router.post('/carro', addCarro);
router.get('/carro/:id', listarCarro);
router.delete('/carro/:id', clearCarr);
router.delete('/carro/:id/:productId', removeCarro);


module.exports = router;