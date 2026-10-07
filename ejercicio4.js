let estado = false

function Libro(nombre, año, autor, prestado) {
    this.nombre = nombre;
    this.año = año;
    this.autor = autor; 
    this.prestado = estado
    this.prestar = function() {
        return this.prestado;
    }

    this.devolver = function() {
        return this.prestado;
    }

    if (prestado === "no") {
        return estado = true;
    }

    else if (prestado === "si") {
        return "Alerta: el libro ya está prestado"
    }

    if (prestado === "si") {
        return estado = false;
    }
    else {
        return "Error en el sistema"
    }
}

const l1 = new Libro("100 años de soledad", 1967, "Gabo", "si");

console.log(l1.prestar());
console.log(l1.devolver());
