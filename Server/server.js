const express = require("express");
const app = express ();
const cors = require ("cors");
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const db = require('./keys').mongoURI
const mongoose = require('mongoose')


app.use(express.urlencoded({extended: true}))
app.use(express.json({ extended: true }))
app.use(cors());
app.use('/cities', require('./routes/cities'));
mongoose.connect(db, {useNewUrlParser: true, 
          useCreateIndex:true,
          useUnifiedTopology: true})

     .then(() => console.log ('Conexión a MongoDB establecida'))

     .catch(err => console.log (err))



app.listen (port, () => {
     console.log ("El servidor se está ejecutando en el port" + port);
});



