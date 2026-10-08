const prompt = require('prompt-sync')();

function Vehiculo(color, marca, modelo, rentado, precio) {
    this.color = color;
    this.marca = marca;
    this.modelo = modelo;
    this.rentado = rentado;
    this.precio = precio; 
    this.recibo = function() {
        return `Resumen de compra: ${this.color} - ${this.marca} - ${this.modelo} - ${this.rentado} - $${this.precio.toLocaleString()}`;
    }
    this.marcasDisponibles = function() {
        return `Marca disponible: ${this.marca}`;
    }
    this.rentar = function() {
        if (this.rentado === "si") {
            return "El vehiculo ya fue rentado";
        }
        else if (this.rentado === "no") {
            this.rentado = "si";
            return "El vehiculo puede ser rentado";
        }
    }
}

const listaVehiculos = [];

for (let i = 1; i <= 3; i++) {
    console.log("Ingrese los datos del vehiculo: ");

    const color = prompt(`Vehiculo ${i} - Color: `);
    const marca = prompt(`Vehiculo ${i} - Marca: `);
    const modelo = Number(prompt(`Vehiculo ${i} - Modelo: `));
    const rentado = prompt(`Vehiculo ${i} - Rentado: `);
    const precio = Number(prompt(`Vehiculo ${i} - Precio: $`));

    const nuevoVehiculo = new Vehiculo(color, marca, modelo, rentado, precio);

    listaVehiculos.push(nuevoVehiculo);
}

for (const vehiculo of listaVehiculos) {
    console.log(vehiculo.recibo());
}

for (const empresa of listaVehiculos) {
    console.log(empresa.marcasDisponibles());
}

for (const renta of listaVehiculos) {
    console.log(renta.rentar());
}









