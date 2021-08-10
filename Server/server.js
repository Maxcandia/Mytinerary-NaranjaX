const express = require("express");
const app = express ();
const cors = require ("cors");
const bodyParser = require('body-parser');
const port = process.env.PORT || 4000;
const db = require('./keys').mongoURI
const mongoose = require('mongoose')


app.use(express.urlencoded({extended: true}))
app.use(express.json({ extended: true }))
app.use(cors());
mongoose.connect(db, {useNewUrlParser: true, 
     useCreateIndex:true,
     useUnifiedTopology: true})
     
     .then(() => console.log ('Conexión a MongoDB establecida'))
     
     .catch(err => console.log (err))
     
     
app.use('/api', require('./routes/cities'));
app.use('/itineraries', require('./routes/itineraries'));

app.listen (port, () => {
     console.log ("El servidor se está ejecutando en el port" + port);
});



