// singular y mayusculas
import mongoose from "mongoose";
// para hacer un modelo necesitamos un 
// 1 schema - molde para definir las propiedades
// 2 nombre para darle al modelo

// paso1
const userSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  birthday: Date,
  address: String,
  role: String,
  phone: String,
  contacts: [String],
  email: String,
  password: String
});

// paso2
export default mongoose.model('User',userSchema);

