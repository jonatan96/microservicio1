exports.body_esquema = {
    type: "object",
    required: [
        "nombre",
        "autor",
        "seccion_biblioteca"
    ],
    properties: {
        nombre: {
            "type": "string"
        },
        autor: {
            "type": "string"
        },
        seccion_biblioteca: {
            "type": "string"
        }
    }
};

exports.body_update = {
    type: "object",
    required: [],
    properties: {
        nombre: {
            "type": "string"
        },
        autor: {
            "type": "string"
        },
        seccion_biblioteca: {
            "type": "string"
        }
    }
};
