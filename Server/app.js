const express = require("express");
const app = express ();
const port = process.env.PORT || 4000;
const cors = require ("cors");
const bodyParser = require('body-parser');
const db = require('./keys').mongoURI
const mongoose = require('mongoose')
const passport = require('passport');
require('./passport');

app.use(express.urlencoded({extended: true}))
app.use(express.json({ extended: true }))
app.use(cors());
app.use(passport.initialize());
mongoose.connect(db, {useNewUrlParser: true, 
     useCreateIndex:true,
     useUnifiedTopology: true})
     .then(() => console.log ('Conexión a MongoDB establecida'))
     .catch(err => console.log (err))
     
app.use('/api', require('./routes/cities'));
app.use('/itineraries', require('./routes/itineraries'));
app.use('/users', require('./routes/users'));

module.exports = {
    port, app
}