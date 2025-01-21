const mongoose = require("mongoose");

function connectDB()
{
    mongoose.connect('mongodb+srv://vrajlalwalawork:vRAJl@lw@l@2204@cluster0.czpq0.mongodb.net/SaiCars-udemy', {useUnifiedTopology: true , useNewUrlParser: true});

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successful')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })
    
}

connectDB()

module.exports = mongoose