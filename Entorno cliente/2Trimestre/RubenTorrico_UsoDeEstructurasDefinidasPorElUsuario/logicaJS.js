// Definimos los productos como arrays simples
let p_zamburinas = ["zamburiñas", 3.5];
let p_mejillones = ["mejillones", 3.5];
let p_gambas = ["gambas", 3.5];
let p_vinoBlanco = ["vino blanco", 3.5];
let p_cerveVictoria = ["cerveza Victoria", 3.5];

// Variable global para almacenar todas las mesas
let mesas = {};

// Clase Mesa
class Mesa {
    // Constructor de la clase
    constructor(numero) {
        this.numero = numero;
        this.ubicacion = null;
        this.clientes = {};
        this.comandas = [];
        this.mostrarMensaje(`Se ha creado la mesa ${numero}.`);
    }

    //Métodos de la clase
    setUbicacion(ubicacion) {
        if (this.ubicacion) {
            alert("Mesa ocupada");
        } else {
            this.ubicacion = ubicacion;
            this.mostrarMensaje(`Ubicación de la mesa ${this.numero}: ${ubicacion}.`);
        }
    }

    setNumeroClientes(cantidad) {
        for (let i = 0; i < cantidad; i++) {
            this.clientes[i] = []; // Inicializamos cada cliente con un array vacío
        }
        this.mostrarMensaje(`Se han sentado ${cantidad} clientes en la mesa ${this.numero}.`);
    }

    agregarProducto(producto, idCliente) { 
        if (this.clientes[idCliente] !== undefined) {
            this.clientes[idCliente].push(producto); // Asociamos el producto al cliente específico
            this.comandas.push(producto);
            this.mostrarMensaje(`El cliente ${idCliente} de la mesa ${this.numero} ha comandado ${producto[0]}.`);
        } else {
            this.mostrarMensaje(`El cliente ${idCliente} no existe en la mesa ${this.numero}.`);
        }
    }

    obtenerComandaMesa() {
        let total = 0;
        this.mostrarMensaje(`Comanda de la mesa ${this.numero}:`);
        for (let i = 0; i < this.comandas.length; i++) {
            let producto = this.comandas[i];
            this.mostrarMensaje(`- ${producto[0]}: ${producto[1]}€`);
            total += producto[1];
        }
    
        this.mostrarMensaje(`Total: ${total}€`);
    }

    obtenerComandaCliente(idCliente) {
        if (this.clientes[idCliente] !== undefined) {
            let total = 0;
            this.mostrarMensaje(`Comanda del cliente ${idCliente} de la mesa ${this.numero}:`);
            
            // Usamos un bucle for tradicional
            for (let i = 0; i < this.clientes[idCliente].length; i++) {
                let producto = this.clientes[idCliente][i];
                this.mostrarMensaje(`- ${producto[0]}: ${producto[1]}€`);
                total += producto[1];
            }
    
            this.mostrarMensaje(`Total: ${total}€`);
        } else {
            this.mostrarMensaje(`El cliente ${idCliente} no existe en la mesa ${this.numero}.`);
        }
    }
    

    borrarMesaMensaje() {
        this.mostrarMensaje(`La mesa ${this.numero} ha sido borrada.`);
    }

    mostrarMensaje(mensaje) {
        let historial = document.getElementById("historial");
        let mensajeDiv = document.createElement("div");
        mensajeDiv.textContent = mensaje;
        historial.appendChild(mensajeDiv);
    }
}

// Funciones para los botones
function crearMesa() {
    let numero = prompt("Introduce el número de la mesa:");
    if (numero && !mesas[numero]) {
        mesas[numero] = new Mesa(numero);
    } else if (mesas[numero]) {
        alert("Esa mesa ya existe.");
    }
}

function establecerUbicacion() {
    let numero = prompt("Introduce el número de la mesa:");
    if (mesas[numero]) {
        let ubicacion = prompt("Introduce la ubicación de la mesa:");
        mesas[numero].setUbicacion(ubicacion);
    } else {
        alert("La mesa no existe.");
    }
}

function establecerClientes() {
    let numero = prompt("Introduce el número de la mesa:");
    if (mesas[numero]) {
        let cantidad = prompt("Introduce el número de clientes:");
        mesas[numero].setNumeroClientes(Number(cantidad));
    } else {
        alert("La mesa no existe.");
    }
}

function agregarProducto() {
    let numero = prompt("Introduce el número de la mesa:");
    if (mesas[numero]) {
        let productos = [p_zamburinas, p_mejillones, p_gambas, p_vinoBlanco, p_cerveVictoria];
        let idCliente = prompt("Introduce el ID del cliente:");
        let productoIndex = prompt("Selecciona un producto: \n0: Zamburiñas\n1: Mejillones\n2: Gambas\n3: Vino Blanco\n4: Cerveza Victoria");
        if (productos[productoIndex]) {
            mesas[numero].agregarProducto(productos[productoIndex], idCliente);
        } else {
            alert("Producto no válido.");
        }
    } else {
        alert("La mesa no existe.");
    }
}

function mostrarComandaMesa() {
    let numero = prompt("Introduce el número de la mesa:");
    if (mesas[numero]) {
        mesas[numero].obtenerComandaMesa();
    } else {
        alert("La mesa no existe.");
    }
}

function mostrarComandaCliente() {
    let numero = prompt("Introduce el número de la mesa:");
    if (mesas[numero]) {
        let idCliente = prompt("Introduce el ID del cliente:");
        mesas[numero].obtenerComandaCliente(idCliente);
    } else {
        alert("La mesa no existe.");
    }
}

function borrarMesa() {
    let numero = prompt("Introduce el número de la mesa que deseas borrar:");
    if (mesas[numero]) {
        mesas[numero].borrarMesaMensaje();
        delete mesas[numero];
    } else {
        alert("La mesa no existe.");
    }
}
