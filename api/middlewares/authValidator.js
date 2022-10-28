// validacion del token
import jwt from 'jwt-simple'
import config from '../config/index.js';
import User from '../models/User.js';

const authValidator = async (req,res,next) => {

    // obtenemos header autorization y renombramos a token
    const { authorization: token } = req.headers;
    if(!token){
        return res.status(403).json({
          msg: "falta cabecera authorization"
        });
    }

    try {
        // verificamos que el token se pueda verificar
     const payload = jwt.decode(token,config.jwtSecret)
    
// extraemos la propiedad userId de payload
    const {userId} = payload;
     if(!userId){
        return res.status(403).json({
            msg: 'Token invalido'
        })
     }
// buscamos el userId
     const user = await User.findById(userId);
     if(!user){
        return res.status(403).json({
          msg: "Token invalido",
        });
     }

     next();

 } catch (error) {
    // fallo cuando no se pudo decodificar
    return res.status(403).json({
        msg:'Token invalido'
    })
 }
}

export {authValidator}