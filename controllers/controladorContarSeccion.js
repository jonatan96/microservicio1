var fs = require('fs');
var { HTTP_CODIGOS } = require('../config/codigos_http');
require('../server/config/connection');
var Libro = require('../models/libro');
var respuesta_json;

exports.contarSeccion = async (req, res) => {
    try {
        // se obtiene el json de respuesta
        respuesta_json = JSON.parse(fs.readFileSync("config/respuesta.json"));
        const pipeline = [
            {
                $match: {
                    $or: [{ seccion_biblioteca: "Ciencias" }, { seccion_biblioteca: "Humanidades" },
                    { seccion_biblioteca: "Historia" }, { seccion_biblioteca: "Política" }]
                }
            },
            { $group: { _id: "$seccion_biblioteca", Total: { $sum: 1 } } }
        ];
        const libros = await Libro.aggregate(pipeline);
        console.log(libros);
        if (!libros) {
            respuesta_json.mensaje = HTTP_CODIGOS._500.contexto._100.mensaje;
            respuesta_json.resultado = [];
            respuesta_json.error = libros;
            return res.status(HTTP_CODIGOS._500.estatus).send(respuesta_json);
        }
        respuesta_json.mensaje = HTTP_CODIGOS._200.contexto._000.mensaje;
        respuesta_json.resultado = libros;
        return res.status(HTTP_CODIGOS._200.estatus).send(respuesta_json);
    } catch (error) {
        console.error("Error: " + error);
        respuesta_json.error = (error.message);
        respuesta_json.mensaje = HTTP_CODIGOS._500.contexto._101.mensaje;
        return res.status(HTTP_CODIGOS._500.estatus).send(respuesta_json);
    }
}
