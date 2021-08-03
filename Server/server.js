const express = require("express");
const app = express ();
const cors = require ("cors");
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;


app.use(express.json({ extended: true }))
app.use(cors());
app.use('/cities', require('./routes/cities'));


app.listen (port, () => {
     console.log ("El servidor se está ejecutando en el port" + port);
});



