import joi, { array } from "joi";

const createTicketValidator = async (req,res, next) =>{

const ticketSchema = joi.object({
    subTotal: joi.number().required(),
    total:joi.number().required(),
    tax:joi.number().required(),
    items: joi.array().items(
        joi.object({
            ref:joi.string()
        })
    ),
    user:joi.array().items(
        {ref:joi.string()}
    ),
})
   try {
    await ticketSchema.validateAsync(req.body);
    next();
   } catch (error) {
    return res.status(400).json({
        msg:'Datos incorrectos ⭕',
        error
    })
   }
}

export {createTicketValidator}