import mongoose from "mongoose";
import dotenv from 'dotenv';
import User from './api/models/User.js'
import Book from './api/models/Book.js'

dotenv.config();

mongoose.connect(
  process.env.DB_URI, async() =>{
    console.log('Conexion existosa');
    // CRUD basico con mongoose

   const user = await User.create({
      address : 'Jilguero 51',
      birthday: new Date(),
      contacts:['Pedrito','Jorge'],
      email:'correo@correo.com',
      lastname:'Avila',
      name:'Paulina',
      password:'12345',
      phone:'5678878',
      role:'Client'
    });
  
    // console.log(user);
    // read
   const users = await User.find({
    name:'Paulina'
   })

    // update
    // muchos
    const promiseResult = await User.updateMany({
      name:'Juan',
      lastname:'Rodriguez'
    })
    // delete
    const result = await User.deleteOne({
      name:'Paulina',
      lastname:'Avila'
    },{
      role:'Client'
    })

    // console.log(result);

 //  /**
  //  * 1.- Crear modelo book
  //  * 2.- create de modelo book
  //  * 3.- find de Book
  //  * 4.- Update Book by id
  //  * 5.- Delete by id
  //  */

  const book = await Book.create({
    title: "La plaza",
    editorial: "Planeta",
    edition: 1,
    pageNumber: 202,
    isbn: "978-607-07-2236-3"
  });
  // console.log(book);
// Todos los libros
  const findBook = await Book.find();

console.log(findBook);

const upBook = await Book.findByIdAndUpdate("6350b6a7226bc5ab93b90711", {
  title: "La plaza2",
});
// console.log(upBook);

const deleteBook = await Book.findByIdAndDelete("6350b543e3108f737910c0b2"); 
const deleteBookTodo = await Book.deleteMany(); 

// console.log(deleteBookTodo);
  });