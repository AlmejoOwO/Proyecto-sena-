const apiUrl = 'http://127.0.0.1:3000/layout/productos.html'
// script.js

document.addEventListener('DOMContentLoaded', () => {
  // Elementos
  const productoLista = document.getElementById('producto-lista');
  const btnBienvenida = document.getElementById('btn-bienvenida');
  const bienvenidaRespuesta = document.getElementById('bienvenida-respuesta');

  // Obtener productos
  fetch('/producto')
    .then((response) => response.json())
    .then((productos) => {
      productos.forEach((producto) => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - ${producto.precio} USD`;
        productoLista.appendChild(li);
      });
    })
    .catch((error) => {
      console.error('Error al obtener productos:', error);
    });

  // Enviar mensaje de bienvenida
  btnBienvenida.addEventListener('click', () => {
    fetch('/', {
      method: 'POST',
    })
      .then((response) => response.text())
      .then((message) => {
        bienvenidaRespuesta.textContent = message;
      })
      .catch((error) => {
        console.error('Error al enviar bienvenida:', error);
      });
  });
});
