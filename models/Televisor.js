const Electrodomestico = require("./electrodomestico");

class Televisor extends Electrodomestico {
  constructor(consumo, procedencia, tamano, tdt) {
    super(consumo, procedencia);
    this.tamano = tamano;
    this.tdt = tdt;
  }

  calcularPrecio() {
    this.definirPrecio();
    if (this.tamano > 40) {
      this.precio = this.precio + this.precio * 0.3;
    }
    if (this.tdt) {
      this.precio = this.precio + 250000;
    }
  }
}
module.exports = Televisor;
