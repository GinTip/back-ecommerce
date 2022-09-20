// 1. Importaciones

const express = require("express");
const app = express();
const PORT = 4000;

// 2. Middlewares

app.use(express.json());

// 3. Rutas

app.get("/body", (req, res) => {
  res.json({
    msg: req.body.msg
  });
});

// 4. Servidor

app.listen(PORT, () => {
  console.log(`Servidor en línea en el puerto ${PORT}`);
});