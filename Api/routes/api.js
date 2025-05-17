
const express = require('express');
const mysql = require('mysql2');
const morgan = require('morgan');
const path = require('path');

const app = express();
app.set('port', 3000);

// Conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456789',
  database: 'quibit'
});

connection.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos');
});

// Middleware
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/layout/productos.html'))); 

// Ruta para mensaje de bienvenida
app.post('/', (req, res) => {
  res.send('Bienvenido a nuestra API');
});


// Ruta para obtener productos
app.get('/producto', (req, res) => {
  const query = 'SELECT * FROM producto';
  connection.query(query, (err, results) => {
    if (err) {
      res.status(500).send('Error al obtener los productos');
      return;
    }
    res.json(results);
  });
});

// Inicia el servidor
app.listen(app.get('port'), () => {
  console.log('Servidor en el puerto', app.get('port'));
});

