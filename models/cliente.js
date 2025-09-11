const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Cambia por tu contraseña
  database: 'barberweb'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Conectado a MySQL');
});

const Cliente = {
  getAll: (callback) => {
    db.query('SELECT * FROM clientes', callback);
  },
  // Puedes agregar más métodos aquí
};

module.exports = Cliente;
