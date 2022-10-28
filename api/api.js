// Nivel general
import express from 'express'
import itemRoutes from './routes/itemRoutes.js'
// import userRoutes from './routes/userRoutes.js'
import authRoutes from './routes/authRoutes.js'
import ticketRoutes from './routes/ticketRoutes.js'
import { authValidator } from './middlewares/authValidator.js'
import morgan from 'morgan'

const api = express()
api.use(morgan('combined'))
// acepte body en formato json
api.use(express.json())
// Todas las rutas van a tener este middleware


api.get('/status',(_,res)=>{
    res.json({
        msg:'Api en linea'
    })
})


api.use(authRoutes);

// se importan todas las rutas
api.use("/items", authValidator, itemRoutes);
// api.use(userRoutes);
api.use("/tickets", authValidator, ticketRoutes);
export default api;