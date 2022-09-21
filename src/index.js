// 1. Importaciones

require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 4000;

// 2. Middlewares

app.use(express.json());

// 3. Rutas

app.get("/", (req, res) => {
  res.json({
    msg: 'Se obtuvo elemento'
  });
});

// 4. Servidor

app.listen(process.env.PORT, () => {
  console.log('Servidor inciado en el puerto ' + process.env.PORT);
});