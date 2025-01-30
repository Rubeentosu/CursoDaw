// Definimos los productos como arrays simples
let p_zamburinas = ["zamburiñas", 3.5];
let p_mejillones = ["mejillones", 3.5];
let p_gambas = ["gambas", 3.5];
let p_vinoBlanco = ["vino blanco", 3.5];
let p_cerveVictoria = ["cerveza Victoria", 3.5];

// Variables globales para almacenar mesas y ubicaciones ocupadas
let mesas = {};
let ubicacionesOcupadas = {};

// Clase Mesa
class Mesa {
    constructor(numero, ubicacion) {
        this.numero = numero;
        this.ubicacion = ubicacion;
        this.clientes = {};
        this.comandas = [];
        ubicacionesOcupadas[ubicacion] = numero;
        this.mostrarMensaje(`Se ha creado la mesa ${numero} en la ubicación ${ubicacion}.`);
    }

    setNumeroClientes(cantidad) {
        let nuevosClientes = {};
        for (let i = 1; i <= cantidad; i++) {
            if (this.clientes[i]) {
                nuevosClientes[i] = this.clientes[i];
            } else {
                nuevosClientes[i] = [];
            }
        }

        this.clientes = nuevosClientes;
        this.mostrarMensaje(`Ahora hay ${cantidad} clientes en la mesa ${this.numero}.`);
    }

    agregarProducto(producto, idCliente) {
        if (this.clientes[idCliente] !== undefined) {
            this.clientes[idCliente].push(producto);
            this.comandas.push(producto);
            this.mostrarMensaje(`El cliente ${idCliente} de la mesa ${this.numero} ha comandado ${producto[0]}.`);
        } else {
            this.mostrarMensaje(`El cliente ${idCliente} no existe en la mesa ${this.numero}.`);
        }
    }

    obtenerComandaMesa() {
        let total = 0;
        this.mostrarMensaje(`Comanda de la mesa ${this.numero}:`);
        for (let producto of this.comandas) {
            this.mostrarMensaje(`- ${producto[0]}: ${producto[1]}€`);
            total += producto[1];
        }
        this.mostrarMensaje(`Total: ${total}€`);
    }

    obtenerComandaCliente(idCliente) {
        if (this.clientes[idCliente] !== undefined) {
            let total = 0;
            this.mostrarMensaje(`Comanda del cliente ${idCliente} de la mesa ${this.numero}:`);
            for (let producto of this.clientes[idCliente]) {
                this.mostrarMensaje(`- ${producto[0]}: ${producto[1]}€`);
                total += producto[1];
            }
            this.mostrarMensaje(`Total: ${total}€`);
        } else {
            this.mostrarMensaje(`El cliente ${idCliente} no existe en la mesa ${this.numero}.`);
        }
    }

    borrarMesaMensaje() {
        this.mostrarMensaje(`La mesa ${this.numero} en la ubicación ${this.ubicacion} ha sido borrada.`);
        delete ubicacionesOcupadas[this.ubicacion];
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
        let ubicacion = prompt("Introduce la ubicación de la mesa (1-18):");
        if (ubicacion >= 1 && ubicacion <= 18 && !ubicacionesOcupadas[ubicacion]) {
            mesas[numero] = new Mesa(numero, ubicacion);
        } else {
            alert("Ubicación no válida o ya ocupada.");
        }
    } else {
        alert("Esa mesa ya existe.");
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

function cambiarUbicacionMesa() {
    let numero = prompt("Introduce el número de la mesa que deseas mover:");
    if (mesas[numero]) {
        let nuevaUbicacion = prompt("Introduce la nueva ubicación de la mesa (1-18):");
        if (nuevaUbicacion >= 1 && nuevaUbicacion <= 18 && !ubicacionesOcupadas[nuevaUbicacion]) {
            delete ubicacionesOcupadas[mesas[numero].ubicacion]; // Liberamos la ubicación anterior
            mesas[numero].ubicacion = nuevaUbicacion; // Asignamos la nueva ubicación
            ubicacionesOcupadas[nuevaUbicacion] = numero; // Marcamos la nueva ubicación como ocupada
            mesas[numero].mostrarMensaje(`La mesa ${numero} ha sido movida a la ubicación ${nuevaUbicacion}.`);
        } else {
            alert("Ubicación no válida o ya ocupada.");
        }
    } else {
        alert("La mesa no existe.");
    }
}