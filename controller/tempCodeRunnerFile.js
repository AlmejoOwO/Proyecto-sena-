const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola desde Express!');
});

const PORT = 3200;
app.listen(PORT, () => {
  console.log(`Servidor Express en http://localhost:${PORT}`);
});
