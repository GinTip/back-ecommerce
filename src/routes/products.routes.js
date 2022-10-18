const { Router } = require("express");
const { validarJWT } = require("../middlewares/jwt.middleware");

const {
  getProduct,
  postProduct,
  updateProduct,
  deleteProduct,
  obtenerProducto,
} = require("../controllers/products.ctrl");

const router = Router();

router.get("/", getProduct);
router.get("/:idProducto", obtenerProducto);
router.post("/", postProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;