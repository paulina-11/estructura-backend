import express from 'express'

import itemRoutes from './routes/itemRoutes.js'
const api = express()
// acepte body en formato json
api.use(express.json())
api.get('/status',(_,res)=>{
    res.json({
        msg:'Api en linea'
    })
})


// se importan todas las rutas
api.use(itemRoutes)
export default api;