var fs = require('fs');
var { HTTP_CODIGOS } = require('../config/codigos_http');
require('../server/config/connection');
var Libro = require('../models/libro');
var buscarTodos = require('../functions/validaciones');
var respuesta_json;

exports.buscarTodos = async (req, res) => {
    try {
        // se obtiene el json de respuesta
        respuesta_json = JSON.parse(fs.readFileSync("config/respuesta.json"));
        const libros = await Libro.find({}, {_id: false});
        let busquedaLibros = await buscarTodos.busqueda(libros); // se hace un tratamiendo para los datos
        if (!libros) {
            respuesta_json.mensaje = HTTP_CODIGOS._500.contexto._100.mensaje;
            respuesta_json.resultado = [];
            respuesta_json.error = libros;
            return res.status(HTTP_CODIGOS._500.estatus).send(respuesta_json);
        }
        respuesta_json.mensaje = HTTP_CODIGOS._200.contexto._000.mensaje;
        respuesta_json.resultado = busquedaLibros;
        return res.status(HTTP_CODIGOS._200.estatus).send(respuesta_json);
    } catch (error) {
        console.error("Error: " + error);
        respuesta_json.error = (error.message);
        respuesta_json.mensaje = HTTP_CODIGOS._500.contexto._101.mensaje;
        return res.status(HTTP_CODIGOS._500.estatus).send(respuesta_json);
    }
}
