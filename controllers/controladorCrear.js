var fs = require('fs');
var { HTTP_CODIGOS } = require('../config/codigos_http');
require('../server/config/connection');
var buscarSeccionDisponible = require('../functions/validaciones');
var Libro = require('../models/libro');
var validarSeccion, respuesta_json;

exports.crear = async (req, res) => {
    try {
        let body = req.body;
        // se obtiene el json de respuesta
        respuesta_json = JSON.parse(fs.readFileSync("config/respuesta.json"));
        console.log(body);
        // validar sección de la biblioteca
        validarSeccion = buscarSeccionDisponible.buscar(body.seccion_biblioteca);
        if (!validarSeccion) {
            respuesta_json.mensaje = HTTP_CODIGOS._400.contexto._011.mensaje;
            respuesta_json.resultado = [];
            respuesta_json.error = HTTP_CODIGOS._400.contexto._011.error;
            return res.status(HTTP_CODIGOS._400.estatus).send(respuesta_json);
        }
        // armado del body para el modelo
        let armadoBody = {
            nombre: body.nombre,
            autor: body.autor,
            seccion_biblioteca: body.seccion_biblioteca
        }
        const objetoLibro = new Libro(armadoBody);
        if (!objetoLibro) {
            respuesta_json.mensaje = HTTP_CODIGOS._500.contexto._100.mensaje;
            respuesta_json.resultado = [];
            respuesta_json.error = objetoLibro;
            return res.status(HTTP_CODIGOS._500.estatus).send(respuesta_json);
        }
        console.log(objetoLibro);
        let resultado = await objetoLibro.save();
        respuesta_json.mensaje = HTTP_CODIGOS._200.contexto._000.mensaje;
        respuesta_json.resultado = resultado;
        return res.status(HTTP_CODIGOS._200.estatus).send(respuesta_json);
    } catch (error) {
        console.error("Error: " + error);
        respuesta_json.error = (error.message);
        respuesta_json.mensaje = HTTP_CODIGOS._500.contexto._101.mensaje;
        return res.status(HTTP_CODIGOS._500.estatus).send(respuesta_json);
    }
}
