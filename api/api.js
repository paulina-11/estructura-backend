import express from 'express'

import itemRoutes from './routes/itemRoutes.js'
import userRoutes from './routes/userRoutes.js'
import ticketRoutes from './routes/ticketRoutes.js'
const api = express()
// acepte body en formato json
api.use(express.json())
api.get('/status',(_,res)=>{
    res.json({
        msg:'Api en linea'
    })
})


// se importan todas las rutas
api.use(itemRoutes);
api.use(userRoutes);
api.use(ticketRoutes);
export default api;