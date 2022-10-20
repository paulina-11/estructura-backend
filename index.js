import mongoose from "mongoose";
import dotenv from 'dotenv';
import User from './api/models/User.js'

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

    console.log(result);


  }


);