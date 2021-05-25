class Electrodomestico {
  constructor(consumo, procedencia) {
    this.precio = 0.0;
    this.consumo = consumo;
    this.procedencia = procedencia;
  }

  definirPrecio() {
    this.aplicarConsumo();
    this.aplicarProcedencia();
  }

  aplicarConsumo() {
    switch (this.consumo) {
      case "A":
        this.precio = this.precio + 450000;
        break;
      case "B":
        this.precio = this.precio + 350000;
        break;
      case "C":
        this.precio = this.precio + 250000;
        break;
    }
  }

  aplicarProcedencia() {
    if (this.procedencia === "Nacional") {
      this.precio = this.precio + 250000;
    } else {
      this.precio = this.precio + 350000;
    }
  }

  calcularPrecio() {}
}

module.exports = Electrodomestico;
