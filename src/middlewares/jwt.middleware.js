const jwt = require("jsonwebtoken")
const User = require("../models/user")

const validarJWT = async (req, res, next) => {
  const token = req.header("auth-token");

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: "No hay token, permiso no válido",
    });
  }

  try {
    const { id } = jwt.verify(token, process.env.SECRET)

    const usuario = await User.findById(id)

    if (!usuario) {
      return res.status(401).json({
        ok: false,
        msg: "Token no válido",
      })
    }

    req.usuario = usuario
    next(); // Proceder con el controlador

  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Error en el servidor",
    })
  }

};

module.exports = {
  validarJWT,
};