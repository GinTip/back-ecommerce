// 1. Importaciones

require('dotenv').config();
const cors = require("cors");
const express = require('express');
const { dbConnection } = require("./database/config")
const app = express();
const PORT = process.env.PORT || 4000;

dbConnection();

// 2. Middlewares

app.use(cors()); // Permisos para intercambio de dominio (dominio cruzado)
app.use(express.json());

// 3. Rutas

app.get("/", (req, res) => {
  res.json({
    msg: 'Bienvenido a la API',
    autor: process.env.AUTOR,
  });
});

app.use("/api/users", require("./routes/users.routes")); // usuarios
app.use("/api/products", require("./routes/products.routes")); // productos
app.use("/api/auth", require("./routes/auth.routes")); // autorizaciones

// 4. Servidor

app.listen(PORT, () => {
  console.log('Servidor inciado en el puerto ' + PORT);
});