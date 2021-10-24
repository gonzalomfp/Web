
// let nombre = prompt ('¡Hola! Ingresá tu nombre')
// let nacionalidad = prompt ('Desde que país estás ingresando')

// alert(`¡Hola ${nombre}! Gracias por sumarte a ViajeroSecrets`)

class Producto {
    constructor (id, nombreProducto, precio, color, stock){

    this.id = id;
    this.nombreProducto = nombreProducto;
    this.precio = precio;
    this.color = color
    this.stock = stock
    }   

    getPrecioConIva() {
        return this.precio * 1.21

    }

    getPrecio() {
        return this.precio
    }
    getNombreProducto(){
        return this.nombreProducto
    }
    getStock(){
        return this.stock
    }
}

const buzo1 = new Producto (01, "buzo mundo", 6500, "azul", 10)

const buzo2 = new Producto (02, "buzo viajar", 6000, 'blanco', 9)

const remera1 = new Producto (03, "remera mundo", 2500, 'negro', 'sin stock')

const remera2 = new Producto (04, 'remeron viajar', 3100, 'blanco', 20)

const barbijo1 = new Producto (05, "barbijo ViajeroSecrets", 500, 'unico',4)


const productos = [buzo1, buzo2, remera1, remera2]


console.log(productos.length);

productos.push(barbijo1)

console.log(productos.length);

console.log(productos);

const sucursales = ["Mar del Plata", "Buenos Aires", "La Plata"]

sucursales.sort()

console.log(sucursales);