import mongoose from 'mongoose';

const mongo_uri =`${process.env.DATABASE_URI}`;
//const mongoose = require('mongoose')
//console.log(mongo_uri);

mongoose.connect(
    mongo_uri,
    { useNewUrlParser: true },
    (err)=>{
        return err
            ? console.log('Hubo un error al conectat con la BD')
            : console.log('Conexión exitosa con mLab')
    }
);