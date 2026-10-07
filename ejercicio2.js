function Mascota(nombre, especie, edad, peso) {
    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
    this.peso = peso;
    this.presentarse = function() {
        return `Atributos: ${this.nombre}, ${this.especie}, ${this.edad}, ${this.peso}.`;
    }
}

const m1 = new Mascota("perro", "pitbull", "5 años", "20kg");
const m2 = new Mascota("gato", "persa", "8 años", "4kg");
const m3 = new Mascota("loro", "eclectus", "1 año", "1kg");

console.log(m1.presentarse());
console.log(m2.presentarse());
console.log(m3.presentarse());

