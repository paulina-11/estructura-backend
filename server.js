import http from 'http';
import api from './api/api.js'
import config from './api/config/index.js';
import database from './api/config/database.js';

const server = http.createServer(api);

server.on('error',(error)=>{
    if(error.code === 'EADDRINUSE'){
        console.log(`El puerto ${config.server.port} ya esta utilizado por otra aplicacion`);
    }
    console.error(`Error al iniciar el puerto${config.server.port}`);
})
server.on('listening',()=>{
    console.log(`Servidor escuchando en el puerto ${config.server.port} 💚`); 
})
// prender servidor
server.listen(config.server.port);

// iniciar la conexion a la base de datos
database()