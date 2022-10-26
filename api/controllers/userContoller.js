import User from "../models/User.js";

const create = async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.json({
      msg: "Ticket creado",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al crear usuario",
      error,
    });
  }
};

const read = async (req, res) => {
  try {
     const users = await User.find(req.query);
     return res.json({
       msg: "leido satisfactoriamente 💚",
       users,
     });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al leer user",
      error,
    });
  }
};

const readById = async (req, res) => {
    const { id } = req.params;
  try {
    const user = await User.findById(id);
    return res.json({
      msg: "User encontrado satisfactoriamente 💚",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al buscar usuario",
      error,
    });
  }
};


const update = async (req, res) => {
    const { id } = req.params;
  try {
    const user = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.json({
      msg: "Modificado satisfactoriamente 💚",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al modificar usuario",
      error,
    });
  }
};
const remove = async (req, res) => {
    const { id } = req.params;
  try {
      const user = await User.remove({ _id: id });
      return res.json({
        msg: "eliminado satisfactoriamente 💚",
        user,
      });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al crear ticket",
      error,
    });
  }
};

export { create, read, readById, update, remove }
