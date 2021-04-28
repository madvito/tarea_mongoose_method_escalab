const express = require('express');

const { 
  listar, 
  guardar, 
  borrar, 
  update } = require('../../controller/producto_controller');


const router = express.Router();

router.get('/usuario', listar);
router.post('/usuario', guardar);
router.delete('/usuario/:id', borrar);
router.put('/usuario/:id', update);

module.exports = router;