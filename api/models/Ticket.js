import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
  subTotal: Number,
  total: Number,
  tax: Number,
  //   relacionar dos modelos
  // pasar un arreglo de ids
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Item",
    },
  ],
  // pasar un id al momento de crearlos 
  user: 
    { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User" 
    }
,
});

export default mongoose.model("Ticket", ticketSchema);
