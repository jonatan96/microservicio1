var express = require('express');
var router = express.Router();

var controladorInsertar = require('../controllers/controladorCrear');
var controladorTodos = require('../controllers/controladorTodos');
var controladorDinamico = require('../controllers/controladorDinamico');
var controladorSeccion = require('../controllers/controladorContarSeccion');
var controladorActualizar = require('../controllers/controladorActualizar');
var controladorEliminar = require('../controllers/controladorEliminar');

router.post('/libro/create', controladorInsertar.crear);
router.get('/libro/all', controladorTodos.buscarTodos);
router.get('/libro/dinamic', controladorDinamico.dinamico);
router.get('/libro/allSeccion', controladorSeccion.contarSeccion);
router.put('/libro/update/:id', controladorActualizar.actualizar);
router.delete('/libro/delete/:id', controladorEliminar.eliminar);

module.exports = router;
