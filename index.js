const Electrodomestico = require("./models/electrodomestico.js");

let prueba = new Electrodomestico("A", "Importado");
prueba.definirPrecio();
console.log(prueba.precio);
