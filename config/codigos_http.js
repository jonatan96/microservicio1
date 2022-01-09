exports.HTTP_CODIGOS = {
    _200: {
        'estatus': 200,
        'contexto': {
            _000: {
                'codigo': '000',
                'mensaje': 'Operación exitosa'
            },
            _001: {
                'codigo': '011',
                'mensaje': 'No Existe información con los datos proporcionados'
            }
        }
    },
    _400: {
        'estatus': 400,
        'contexto': {
            _010: {
                'codigo': '010',
                'mensaje': 'Existe información con los datos proporcionados'
            },
            _011: {
                'codigo': '011',
                'mensaje': 'Sección de la biblioteca no disponible.',
                'error': 'Sección disponibles: Ciencias, Humanidades, Historia y Política'
            },
            _012: {
                'codigo': '012',
                'mensaje': 'No Existe información con los datos proporcionados'
            }
        }
    },
    _500: {
        'estatus': 500,
        'contexto': {
            _100: {
                'codigo': '100',
                'mensaje': 'Error en base de datos'
            },
            _101: {
                'codigo': '101',
                'mensaje': 'Error al ejecutar proceso'
            }
        }
    }
}
