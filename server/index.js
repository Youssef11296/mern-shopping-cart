const express = require ('express');
const mongoose = require ('mongoose');
const cors = require ('cors');
require ('dotenv').config ();

// DB setup
mongoose.connect (process.env.URI);
const connection = mongoose.connection;
connection.once ('open', () =>
  console.log ('The DB is sucessfully established')
);

// Server init
const app = express ();

// Server middlewares
app.use (express.json ());
app.use (cors ());
app.use ('/api/auth', require ('./routes/auth'));
app.use ('/api/products', require ('./routes/products'));
app.use ('/api/cart', require ('./routes/cart'));

// Server configuration
const port = process.env.PORT || 5000;
app.listen (port, () =>
  console.log (`The server is successfully running on port: ${port}`)
);
