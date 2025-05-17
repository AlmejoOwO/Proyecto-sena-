
const express = require('express');
const mysql = require('mysql2');
const morgan = require('morgan');
const bodyParser = require('body-parser');
import path from "path"; 
import { FileURLToPath }  from "url";
const __dirname = path._dirnane(FileURLToPath(Import.meta.url)); 


const app = express();
app.set('port', 3000);

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456789',
  database: 'quibit'
});

// Iniciar el servidor
app.listen(app.get('port'), () => {
  console.log(`Servidor en el puerto ${app.get('port')}`);
});

connection.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos');
});

//Routes 
app.get("./" , (req, res) => res.sendfile(_dirnane + "/layout/productos.html"))