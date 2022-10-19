import express from 'express'
const api = express()
api.get('/status',(_,res)=>{
    res.json({
        msg:'Api en linea'
    })
})

export default api;