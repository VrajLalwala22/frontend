const express = require('express');

const app = express();

const port = process.env.PORT || 5000; 

const dbconnection = require('./db'); 

app.get('/', (req, res) => res.send('Hello'));

app.listen(port, () => console.log(`Node.js Server Started on Port ${port}`)); 
