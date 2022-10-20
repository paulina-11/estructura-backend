import http from 'http';
import api from './api/api.js'

const server = http.createServer(api);

server.on('error',(error)=>{
    if(error.code === 'EADDRINUSE'){
        console.log('Ese puerto ya esta siendo usado por otra aplicación');
    }
    console.error('Error al iniciar servidor ❌ ' + error)
})
server.on('listening',()=>{
    console.log('Servidor escuchando 💚' ); 
})
// prender servidor
server.listen(3000)