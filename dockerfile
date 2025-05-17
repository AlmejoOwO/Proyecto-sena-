
# Usar una imagen base de Node.js
FROM node:18

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos del proyecto al contenedor
COPY . .

# Instalar las dependencias del proyecto
RUN npm install

# Exponer el puerto en el que corre la aplicación
EXPOSE 3000

# Comando por defecto para correr la aplicación
CMD ["npm", "start"]
