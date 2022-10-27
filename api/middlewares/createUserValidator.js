import joi from 'joi'

const createUserValidator = async (req,res,next)=>{
    // crear schema
    // validar req.body con el schema
    // next en caso de que todo ok
    // sino res.status(400)
    // registrar middelware

    // 1 - schema
 const userSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
  });

  try {
    await userSchema.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      msg: 'Datos incorrectos',
      error,
    });
  }


}
export {createUserValidator}