var mongoose = require('mongoose');

var schema_libro = new mongoose.Schema ({
    nombre:{
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    seccion_biblioteca: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

var libros = new mongoose.model('Libros', schema_libro);

module.exports = libros;
