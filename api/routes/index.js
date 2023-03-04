const express = require("express");
const router = express.Router();

const {
  newClient,
  showClients,
  showClientById,
  updateClient,
  deleteClient,
} = require("../controllers/clientController");

const { newProduct } = require("../controllers/productsController");

const { userSignIn, userLogin } = require("../controllers/userController");

module.exports = function () {
  // Agregar nuevps clientes
  router.post("/clients", newClient);

  // Mostrar clientes
  router.get("/clients", showClients);

  // Mostrar cliente por ID
  router.get("/clients/:id", showClientById);

  // Actualizar por ID
  router.put("/clients/:id", updateClient);

  // Borrar cliente por id
  router.delete("/clients/:id", deleteClient);

  /* PRODUCTOS */
  // Nuevos Productos
  router.post("/products", newProduct);

  // USUARIOS
  router.post("/sign-up", userSignIn);
  router.post("/login", userLogin);

  return router;
};
