const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const users = require('./controllers/routes/User');
const cors = require('cors');

const puerto = 8080;
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

//endpoint de inicio
app.use('/api', users);

mongoose.connect(
    "mongodb://localhost/tareas",
    {useNewUrlParser: true},
    (err, res) =>{
        err && console.log("Error al conectar con la base de datos");
        app.listen(puerto,()=>{
            console.log("Server on port " + puerto);
        });
    }

);