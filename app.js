// function Persona(nombre, nacionalidad) {

//     this.nombre = nombre;
//     this.nacionalidad = nacionalidad;

// }

// let nombre = prompt('Ingresá tu nombre')
// let nacionalidad = prompt('Nacionalidad')

// const persona1 = new Persona(nombre, nacionalidad)

// console.log(persona1)

// console.log(typeof persona1);

// alert(`¡Hola ${nombre}, gracias por seguirme desde ${nacionalidad}!`)


// class Persona {
//     constructor (nombre, nacionalidad) {
//         this.nombre = nombre
//         this.nacionalidad = nacionalidad
//     }
//     saludar () {
//         console.log('Hola que tal' );
//     }
// }
// let nombre = prompt ('Decime tu nombre')
// let nacionalidad = prompt ('Desde donde me seguis')

// const persona = new Persona (nombre, nacionalidad)

// alert(`¡Hola ${nombre}, gracias por seguirme desde ${nacionalidad}!`)

// console.log(persona);
// persona.saludar()

class Producto {
    constructor (nombre, precio, enStock){

    this.nombre = nombre;
    this.precio = precio;
    this.enStock = enStock;
    }   

    getPrecioConIva() {
        return this.precio * 1.21

    }

    getPrecio() {
        return this.precio
    }
}

const producto1 = new Producto ('Fernet', 500)

console.log(producto1.getPrecio());

console.log(producto1.getPrecioConIva());