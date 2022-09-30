const { Router } = require("express");
const { validarJWT } = require("../middlewares/jwt.middleware");

const {
  getProduct,
  postProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products.ctrl");

const router = Router();

router.get("/", validarJWT, getProduct);
router.post("/", postProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;