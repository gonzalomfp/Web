// let nombre = prompt('Ingresá tu nombre')

// alert(`¡Hola ${nombre}! Bienvenido a mi Web`)

// for (let i = 0; index < 10; i++) {

// }

// while (entrada !="ESC") {
//  alert("El usuario ingresó " + entrada);
//  entrada = prompt("Ingresar otro dato")
//}


// switch (nombre) {
//     case 'Gonzalo':
//         alert('Hola Gonzalo')
//         break;

//     case 'Matias':
//         alert('Hola Matias')
//         break;

//     default:
//         alert('No te conozco')
//         break;
// }

// if(nombre === "gonzalo") {
//     alert('Hola Gonzalo')
// } else if (nombre === 'Matias'){
//     alert('Hola Matias')
// } else {
//     alert('No sé quien sos')
// }


// animal = 123

// console.log(typeof animal);

//boolean
//string
//number
//null
//undefined
//BigInt
//Symbol

// Tipo de datos primitos: No poseen propiedades ni metodos y son inmutables

// const persona1 = new Object({
//         nombre: 'Andres'
//     }

// )
// const persona2 = {
//     nombre: 'Andres',
//     edad: 25,

//     saludar: function() {
//         console.log('Hola, que tal?')
//     }
// }

// console.log(typeof persona1)
// console.log(typeof persona2)

// console.log(persona1)

// console.log(persona2.nombre);

// console.log(persona2['nombre']);

// console.log(persona2.saludar());

// persona2.profesion = 'Desarrollador'

// console.log(persona2);


function Persona(nombre, nacionalidad) {

    this.nombre = nombre;
    this.nacionalidad = nacionalidad;

}


let nombre = prompt('Ingresá tu nombre')
let nacionalidad = prompt('Nacionalidad')

const persona1 = new Persona(nombre, nacionalidad)

console.log(persona1)

console.log(typeof persona1);

alert(`¡Hola ${nombre}, gracias por seguirme desde ${nacionalidad}!`)

//01:30