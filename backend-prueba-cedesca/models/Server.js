const express = require('express');
const cors = require('cors');


class Server {
    
    constructor() {

        // Inicialización del servidor
        this.app = express();
        this.port = 8081;

        // Rutas del servidor API
        this.paths = {
            usuarios: '/api/usuarios'
        }

        // Middlewares (complementos del servidor)
        this.middlewares();

        // Cargamos las rutas del servidor
        this.routes();

    }

    // Declaración de middlewares
    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body de las peticiones
        this.app.use( express.json() );

    }

    // Declaración de rutas
    routes() {
    
        this.app.use(this.paths.usuarios, require('../routes/user'));

    }

    // Arranque del servidor
    start() {
        this.app.listen( this.port, () => {
            console.log('Servidor iniciado en el puerto', this.port );
        });
    }

}

module.exports = Server;