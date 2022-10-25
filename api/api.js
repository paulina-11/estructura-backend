import express from 'express'

import itemRoutes from './routes/itemRoutes.js'
const api = express()
api.get('/status',(_,res)=>{
    res.json({
        msg:'Api en linea'
    })
})

// se importan todas las rutas
api.use(itemRoutes)
export default api;