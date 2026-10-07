function Estudiante(nombre, edad, curso, aprobado) {
    this.nombre = nombre;
    this.edad = edad;
    this.curso = curso;
    this.aprobado = aprobado;
    this.mostrarResultado = function() {
        return `Resultado: ${this.aprobado}`;
    };

    if (aprobado >= 3.0) {
        return this.aprobado = true;
    }
    else {
        return this.aprobado = false;
    }
}


const e1 = new Estudiante("Paco", 15, "Decimo", 4.5);
const e2 = new Estudiante("Lucia", 10, "Quinto", 2.9);
const e3 = new Estudiante("Diego", 8, "Tercero", 4.0);
const e4 = new Estudiante("Mariana", 12, "Septimo", 3.6);

console.log(e1);
console.log(e2);
console.log(e3);
console.log(e4);


