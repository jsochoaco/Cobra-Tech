const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const routers = require("./routes/"); // Asegúrate de que la ruta a tus rutas sea correcta.
const server = express();

//===MIDDLEWARES
server.use(morgan("dev")); // Morgan con el formato "dev" para registrar las solicitudes en la consola.
server.use(express.json()); // Express para analizar las solicitudes entrantes con formato JSON.
server.use(cors()); // Cors para permitir solicitudes de diferentes dominios.

// Middleware para verificar la API key en parámetros de consulta
const apiKeyMiddleware = (req, res, next) => {
  const apiKey = req.headers.authorization; 
  if (apiKey && apiKey === 'cobra2023') {
    next();
  } else {
    res.status(401).json({ error: 'Acceso no autorizado' });
  }
};


server.use(apiKeyMiddleware); // Aplicar middleware antes de las rutas
server.use(routers); // Módulo de rutas importado para manejar las rutas y las solicitudes en la aplicación.

module.exports = server; // Exportamos la instancia de la aplicación aquí
