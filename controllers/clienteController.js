const Cliente = require('../models/cliente');

exports.listarClientes = (req, res) => {
  Cliente.getAll((err, results) => {
    if (err) {
      res.status(500).send('Error al obtener clientes');
    } else {
      res.render('clientes', { clientes: results });
    }
  });
};
