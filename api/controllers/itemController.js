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
      msg: "Item creado satisfactoriamente 💚",
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

// ver toda la base
const read = async (req,res) => {
try {
    const item = await Item.find();
    return res.json({
      msg: "leido satisfactoriamente 💚",
      item,
    });
  } catch (error) {
    // que hacer con ese error
    return res.status(500).json({
        msg:'Error al leer Item 💔',
        error
    })
  }
};

// ver un usuario
const readOne = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Item.findById(id);
    return res.json({
      msg: "encontrado satisfactoriamente 💚",
      item,
    });
  } catch (error) {
    // que hacer con ese error
    return res.status(500).json({
      msg: "Error al encontrar eliminar Item 💔",
      error,
    });
  }
};

// actualizar un usuario
const update = async (req, res) => {
  try {
    const { id } = req.params;
    const {name, price, stock} = req.body
    const item = await Item.updateOne({_id: id},{ $set: {name, price, stock}});
    return res.json({
      msg: "Modificado satisfactoriamente 💚",
      item,
    });
  } catch (error) {
    // que hacer con ese error
    return res.status(500).json({
      msg: "Error al modificar Item 💔",
      error,
    });
  }
};

// eliminar un usuario
const remove = async (req,res) => {
  try {
    const { id } = req.params;
    const item = await Item.remove({_id:id});
    return res.json({
      msg: "eliminado satisfactoriamente 💚",
      item,
    });
  } catch (error) {
    // que hacer con ese error
    return res.status(500).json({
        msg:'Error al eliminar Item 💔',
        error
    })
  }
};

export { create, read, update, remove, readOne };
