import Ticket from "../models/Ticket.js";

const create = async (req, res) => {
  try {
    const ticket = await Ticket.create(req.body);
    return res.json({
      msg: "Ticket creado",
      ticket,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al crear ticket",
      error,
    });
  }
};

const read = async (req, res) => {
  try {
    const tickets = await Ticket.find(req.query)
      .populate("items")
      .populate("user");
    return res.json({
      msg: "leido satisfactoriamente 💚",
      tickets,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al crear ticket",
      error,
    });
  }
};

const readById = async (req, res) => {
  try {
    const { id } = req.params;
    const ticket = await Ticket.findById(id).populate("items");

    if (!ticket) {
      return res.status(404).json({
        msg: "Ticket no encontrado",
        error,
      });
    }
    return res.json({
      msg: "Ticket encontrado satisfactoriamente 💚",
      ticket,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al encontrar ticket",
      error,
    });
  }
};

const update = async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.json({
      msg: "Modificado satisfactoriamente 💚",
      ticket,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al crear ticket",
      error,
    });
  }
};
const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const ticket = await Ticket.remove({ _id: id });
    return res.json({
      msg: "eliminado satisfactoriamente 💚",
      ticket,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al crear ticket",
      error,
    });
  }
};


const calculateById = async (req, res) => {
  try {
   

    let subTotal = 0; 
    let tax; 
    let total; 

    const { id } = req.params;

    const ticket = await Ticket.findById(id).populate('items');

    subTotal = ticket.items.reduce(
      (anterior, itemActual) => anterior + itemActual.price,
      0
    );

    tax = subTotal * 0.16;

    total = tax + subTotal;

    const updated = await Ticket.findByIdAndUpdate(
      id,
      {
        subTotal,
        total,
        tax,
      },
      {
        new: true,
      }
    );

    return res.json({
      msg: 'Ticket calculado correctamente',
      ticket: updated,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al calcular ticket',
      error,
    });
  }
}

export { create, read, readById, update, remove, calculateById };
