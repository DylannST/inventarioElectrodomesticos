const Electrodomestico = require("./electrodomestico");

class Nevera extends Electrodomestico {
  constructor(consumo, procedencia, capacidad) {
    super(consumo, procedencia);
    this.capacidad = capacidad;
  }

  calcularPrecio() {
    this.definirPrecio();
    if (this.capacidad > 120) {
      this.precio = this.precio + this.aumento(this.precio);
    }
  }
  aumento(valor) {
    let veces = parseInt((this.capacidad - 120) / 10);
    let aumento = 0;
    for (let i = 0; i < veces; i++) {
      aumento = aumento + valor * 0.05;
    }
    return aumento;
  }
}
module.exports = Nevera;
