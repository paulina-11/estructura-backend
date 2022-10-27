import joi from 'joi'

const createItemValidator = async (req,res,next) =>{

    const itemSchema = joi.object ({
        name: joi.string().required(),
        price: joi.number().required(),
        stock: joi.number().required()
    })

    try {
        await itemSchema.validateAsync(req.body);
        next();
    } catch (error) {
        return res.status(400).json({
            msg: 'Datos invalidos ❌',
            error
        });
    }
}

export { createItemValidator };