
import User from "../models/User.js"
import bcrypt from 'bcrypt'
import jwt from 'jwt-simple'
import config from "../config/index.js"
import { json } from "express"

const register = async (req,res) =>{
    try {

    const hashed = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashed;

      const user = await User.create(req.body);
      user.password = undefined;

      return res.json({
        msg:'Usuario creado',
        user
      })
    } catch (error) {
        return res.status(500).json({
            msg:'Error al registrar usuario, intente más tarde',
            error
        })
    }
}

// obtiene email y password y regresa token
const login = async (req, res) =>{
    const {body} = req
    if(!body.password || !body.email){
        return res.status(400).json({
            msg:'ingresa correo y contraseña'
        })
    }
    try {
        const user = await User.findOne({
            email : body.email,
        })
        if(!user){
            return res.status(403).json({
                msg:'Credenciales invalidas'
            })
        }
        // comparacion de la contraseña
       const isValid = await bcrypt.compare(body.password,user.password)
       if(!isValid){
        return res.status(403).json({
            msg:'credenciales invalidas'
        })
       }
       const payload = {
        userId: user.id
       }
        const token = jwt.encode(payload,config.jwtSecret);
        return res.json({
            msg:'Login correcto',
            token
        })
    } catch (error) {
        return res.status(500).json({
            msg:'Error al hacer login',
            error
        })
    }
}
export {register, login}