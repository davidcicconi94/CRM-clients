const Clientes = require("../models/Clients");

// Métodos
exports.newClient = async (req, res, next) => {
  const client = new Clientes(req.body);

  try {
    //Almacenar el registro
    await client.save();
    res.json({ msg: `Client ${client.name} was added succesfully!` });
  } catch (error) {
    console.error(error);
    next(); // que no se detenga la app
  }
};

// Mostrar todos los clientes
exports.showClients = async (req, res, next) => {
  try {
    const clients = await Clientes.find({});

    res.json(clients);
  } catch (error) {
    console.error(error);
    next();
  }
};

// Mostrar clientes por ID
exports.showClientById = async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log(id);
    const client = await Clientes.findById(id);

    if (!client) {
      res.json({ msg: `ID Error: client  doesn't exist!` });
      next();
    }

    res.json(client);
  } catch (error) {
    console.error(error);
  }
};

// Actualizar clientes por ID
exports.updateClient = async (req, res, next) => {
  try {
    const { id } = req.params;
    const client = await Clientes.findByIdAndUpdate(
      { _id: id },
      req.body({
        new: true,
      })
    );

    res.json(client);
  } catch (error) {
    console.error(error);
  }
};

// Borrar cliente por id
exports.deleteClient = async (req, res, next) => {
  try {
    const { id } = req.params;

    await Clientes.findByIdAndDelete({ _id: id });

    res.json({ msg: `Usuario ID: ${id} ha sido eliminado correctamente.` });
  } catch (error) {
    console.log(error);
    next();
  }
};
