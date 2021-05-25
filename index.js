const Televisor = require("./models/Televisor.js");
const Electrodomestico = require("./models/electrodomestico.js");

let prueba = new Televisor("B", "Nacional", 41, true);
prueba.calcularPrecio();
console.log(prueba.precio);
