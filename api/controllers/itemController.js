// primero crear las que no tienen relaciones
// funciones elementales del CRUD
// formas de mandar info al server
/*
 *req.body
 *req.query
 *req.params
 *req.headers
 */
import Item from "../models/Item.js";
// que se guarde en nuestro server
const create = async (req, res) => {
  try {
    const item = await Item.create(req.body);
    return res.json({
      msg: "Item creado satisfactoriamente",
      item,
    });
  } catch (error) {
    // que hacer con ese error
    return res.status(500).json({
        msg:'Error al crear Item 💔',
        error
    })
  }
};
const read = () => {};
const update = () => {};
const remove = () => {};

export { create, read, update, remove };
