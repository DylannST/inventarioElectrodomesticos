const Televisor = require("./models/Televisor.js");
const Electrodomestico = require("./models/electrodomestico.js");
const Nevera = require("./models/nevera.js");

/* let prueba = new Televisor("B", "Nacional", 41, true);
prueba.calcularPrecio();
console.log(prueba.precio); */

let prueba = new Nevera("C", "Importado", 160);
prueba.calcularPrecio();
console.log(prueba.precio);
