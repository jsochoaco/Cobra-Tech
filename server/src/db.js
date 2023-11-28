const { Sequelize } = require("sequelize"); // Importar Sequelize para que JS interactue con la DDBB
require("dotenv").config(); //Dependencia para leer archivo .env

// Importar módulos de Node.js
const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE, DB_DEPLOY } = process.env;
const sequelize = new Sequelize(DB_DEPLOY, {
    logging: false,
    native: false,
    dialectOptions: {
        ssl: {
            require: true
        }
    }
});
// Obtener el nombre del archivo actual
const basename = path.basename(__filename);
// Array para almacenar los modelos
const modelDefiners = [];
// Leer los archivos de modelos desde la carpeta correspondiente
fs.readdirSync(path.join(__dirname, '/models'))
    .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach((file) => {
        modelDefiners.push(require(path.join(__dirname, '/models', file)));
    });
// Llamar a la función de cada modelo para definirlo en Sequelize
modelDefiners.forEach(model => model(sequelize));
// Modificar los nombres de los modelos para que empiecen con mayúscula
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);
// Obtener el modelos desde sequelize
const {Order} = sequelize.models

module.exports = {
    ...sequelize.models, // exporta los modelos
    conn: sequelize,     // exporta la conexión { conn } = require('./db.js');
};