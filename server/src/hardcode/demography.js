const {Department} = require("../db.js")
const {City} = require("../db.js")

const fs = require('fs');
const path = require('path');
const rutaArchivo = path.join(__dirname, 'colombia.json');
let citys = []
let cityCount = 0
let departments = []
try {
  const contenidoJSON = fs.readFileSync(rutaArchivo, 'utf-8');
  const jsonArray = JSON.parse(contenidoJSON);
  jsonArray.forEach(objeto => {
    departments.push({id: objeto.id + 1, department: objeto.departamento})
    objeto.ciudades.forEach(ciudad => {
        citys.push({city: ciudad, departmentId: objeto.id + 1  })
        cityCount++
    })
  });
} catch (error) {
  console.error('Error al leer el archivo JSON:', error);
}
const createDepartments = async () => {
    try {
        const promises = departments.map((departamento) => {Department.create(departamento)});
        await Promise.all(promises);
        console.log('Departamentos creados exitosamente');
    } catch (error) {
        console.error('Error al crear departamentos:', error);
    }
};

const createCitys = async () => {
    try {
        const promises = citys.map((ciudad) => {City.create(ciudad);});
        await Promise.all(promises);
        console.log('Ciudades creadas exitosamente');
    } catch (error) {
        console.error('Error al crear ciudades', error);
    }
};

module.exports = {
    createCitys, 
    createDepartments
}
