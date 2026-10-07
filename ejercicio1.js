function Computador (marca, procesador, ramenGB, precio) {
    this.marca = marca;
    this.procesador = procesador;
    this.ramenGB = ramenGB;
    this.precio = precio; 
}

const c1 = new Computador("Lenovo", "Ryzen", 8, 2000000);
const c2 = new Computador("HP", "Core", 16, 3100000);
const c3 = new Computador("Asus", "Ryzen", 32, 2500000);

console.log(c1);
console.log(c2);
console.log(c3);



