const Product = require("../models/product");

const getProduct = async (req, res) => { // Obtener productos
  
  const products = await Product.find();

  return res.json({
    msg: "Lista de productos obtenida",
    data: products,
  });
};

const obtenerProducto = async (req, res) => {
  const { idProducto } = req.params;
  const producto = await Product.findById(idProducto);

  return res.json({
    msg: "Producto obtenido",
    data: producto,
  });
};

const postProduct = async (req, res) => {  // Crear producto
  const { name, description, price } = req.body;

  const producto = {
    name: name,
    description: description,
    price: price,
  };

  const nuevoProducto = await Product.create(producto);

  return res.json({
    msg: "Producto creado",
    data: nuevoProducto,
  });
};

const updateProduct = async (req, res) => { // Actualizar producto
  const { idProducto } = req.params;
  const { name, description, price } = req.body;

  const actualizar = {
    name,
    description,
    price,   
  };

  const productoActualizado = await Product.findByIdAndUpdate(idProducto, actualizar, {
    new: true,
  });

  return res.json({
    msg: "Producto actualizado",
    data: productoActualizado,
  });
};

const deleteProduct = async (req, res) => { // Eliminar producto
  const { idProducto } = req.params;

  const productoEliminado = await Product.findOneAndRemove(idProducto);

  return res.json({
    msg: `Se eliminó un producto llamado ${productoEliminado.name}`,
    data: productoEliminado,
  });
};

module.exports = {
  getProduct,
  postProduct,
  updateProduct,
  deleteProduct,
  obtenerProducto,
};