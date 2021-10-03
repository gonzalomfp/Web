/*let nombre = prompt('Ingresa tu nombre')




let nombre = prompt ('Ingresa tu nombre')
let nombreIngresado = Text (nombre)

let apellido = prompt ('Ingresa tu apellido')
let apellidoIngresado = Text(apellido) 

console.log ('Bienvenido: ' + nombre);

if (nombre === "") {
    alert("No ingresaste tu nombre");
}
else {
    alert('Bienvenido' + ' ' + (nombre));
}
*/


let i = prompt ('Ingresar un dato');

while (i != "ESC") {
    
    alert(`El usuario ingresó ${i}`);

    i = prompt('Ingresar otro dato');
}