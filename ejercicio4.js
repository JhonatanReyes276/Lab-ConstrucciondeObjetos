let prestado = false

function Libro(nombre, año, autor, prestado) {
    this.nombre = nombre;
    this.año = año;
    this.autor = autor; 
    this.prestado = prestado
    this.prestar = function() {
        if (prestado === "no") {
            this.prestado = true;
            return "El libro está disponible"
        }
        else if (prestado === "si") {
            return "Alerta: el libro ya fue prestado"
        }
    }

    this.devolver = function() {
        if (prestado === "si") {
            this.prestado = false;
            return "El libro fue devuelto correctamente"
        }
        else {
            return "Alerta: hay una inconsistencia"
        }
    }
}

const l1 = new Libro("100 años de soledad", 1967, "Gabo", "no");

console.log(l1.prestar());
console.log(l1.devolver());
console.log(l1.prestar());

