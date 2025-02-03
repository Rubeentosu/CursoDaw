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
    // Constructor de la clase Mesa
    constructor(numero, ubicacion) {
        this.numero = numero;
        this.ubicacion = ubicacion;
        this.clientes = {}; // Objeto para almacenar los clientes de la mesa
        this.comandas = []; // Array para almacenar los productos de la mesa
        ubicacionesOcupadas[ubicacion] = numero; // Marcamos la ubicación como ocupada
        this.mostrarMensaje(`Se ha creado la mesa ${numero} en la ubicación ${ubicacion}.`);
    }

    // Métodos de la clase Mesa
    // Método para establecer el número de clientes de la mesa
    setNumeroClientes(cantidad) {
        let nuevosClientes = {}; // Objeto para almacenar los nuevos clientes

        // Copiamos los clientes actuales a los nuevos clientes
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

    // Método para agregar un producto a la comanda de un cliente
    agregarProducto(producto, idCliente) {

        // Comprobamos si el cliente existe en la mesa
        if (this.clientes[idCliente] !== undefined) {
            this.clientes[idCliente].push(producto); // Añadimos el producto al cliente
            this.comandas.push(producto); // Añadimos el producto a la comanda de la mesa
            this.mostrarMensaje(`El cliente ${idCliente} de la mesa ${this.numero} ha comandado ${producto[0]}.`);
        } else {
            this.mostrarMensaje(`El cliente ${idCliente} no existe en la mesa ${this.numero}.`);
        }
    }

    // Método para obtener la comanda de la mesa
    obtenerComandaMesa() {
        let total = 0;
        this.mostrarMensaje(`Comanda de la mesa ${this.numero}:`);

        // Recorremos los productos de la mesa y los mostramos
        for (let producto of this.comandas) {
            this.mostrarMensaje(`- ${producto[0]}: ${producto[1]}€`);
            total += producto[1];
        }
        this.mostrarMensaje(`Total: ${total}€`);
    }

    // Método para obtener la comanda de un cliente
    obtenerComandaCliente(idCliente) {
        // Comprobamos si el cliente existe en la mesa
        if (this.clientes[idCliente] !== undefined) {
            let total = 0;
            this.mostrarMensaje(`Comanda del cliente ${idCliente} de la mesa ${this.numero}:`);

            // Recorremos los productos del cliente y los mostramos
            for (let producto of this.clientes[idCliente]) {
                this.mostrarMensaje(`- ${producto[0]}: ${producto[1]}€`);
                total += producto[1];
            }
            this.mostrarMensaje(`Total: ${total}€`);
        } else {
            this.mostrarMensaje(`El cliente ${idCliente} no existe en la mesa ${this.numero}.`);
        }
    }

    // Método para borrar la mesa
    borrarMesaMensaje() {
        this.mostrarMensaje(`La mesa ${this.numero} en la ubicación ${this.ubicacion} ha sido borrada.`);
        delete ubicacionesOcupadas[this.ubicacion];
    }

    // Método para mostrar mensajes
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

    // Comprobamos si la mesa no existe y si la ubicación no está ocupada
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

// Función para establecer el número de clientes de una mesa
function establecerClientes() {
    let numero = prompt("Introduce el número de la mesa:");

    // Comprobamos si la mesa existe
    if (mesas[numero]) {
        let cantidad = prompt("Introduce el número de clientes:");
        mesas[numero].setNumeroClientes(Number(cantidad));
    } else {
        alert("La mesa no existe.");
    }
}

// Función para agregar un producto a la comanda de un cliente
function agregarProducto() {
    let numero = prompt("Introduce el número de la mesa:");

    if (mesas[numero]) { // Comprobamos si la mesa existe
        let productos = [p_zamburinas, p_mejillones, p_gambas, p_vinoBlanco, p_cerveVictoria];
        let idCliente = prompt("Introduce el ID del cliente:");
        let productoIndex = prompt("Selecciona un producto: \n0: Zamburiñas\n1: Mejillones\n2: Gambas\n3: Vino Blanco\n4: Cerveza Victoria");

        if (productos[productoIndex]) {// Comprobamos si el producto es válido
            mesas[numero].agregarProducto(productos[productoIndex], idCliente);
        } else {
            alert("Producto no válido.");
        }
    } else {
        alert("La mesa no existe.");
    }
}

// Funciones para mostrar comandas
function mostrarComandaMesa() {
    let numero = prompt("Introduce el número de la mesa:");

    if (mesas[numero]) {
        mesas[numero].obtenerComandaMesa();
    } else {
        alert("La mesa no existe.");
    }
}

// Función para mostrar la comanda de un cliente
function mostrarComandaCliente() {
    let numero = prompt("Introduce el número de la mesa:");

    if (mesas[numero]) {
        let idCliente = prompt("Introduce el ID del cliente:");
        mesas[numero].obtenerComandaCliente(idCliente);
    } else {
        alert("La mesa no existe.");
    }
}

// Función para borrar una mesa
function borrarMesa() {
    let numero = prompt("Introduce el número de la mesa que deseas borrar:");

    if (mesas[numero]) {
        mesas[numero].borrarMesaMensaje();
        delete mesas[numero];
    } else {
        alert("La mesa no existe.");
    }
}

// Función para cambiar la ubicación de una mesa
function cambiarUbicacionMesa() {
    let numero = prompt("Introduce el número de la mesa que deseas mover:");

    if (mesas[numero]) {
        let nuevaUbicacion = prompt("Introduce la nueva ubicación de la mesa (1-18):");

        if (nuevaUbicacion >= 1 && nuevaUbicacion <= 18 && !ubicacionesOcupadas[nuevaUbicacion]) {
            const ubicacionAnterior = mesas[numero].ubicacion;
            delete ubicacionesOcupadas[ubicacionAnterior]; // Liberamos la ubicación anterior

            mesas[numero].ubicacion = nuevaUbicacion; // Asignamos la nueva ubicación
            ubicacionesOcupadas[nuevaUbicacion] = numero; // Marcamos la nueva ubicación como ocupada
            mesas[numero].mostrarMensaje(`La mesa ${numero} ha sido movida a la ubicación ${nuevaUbicacion}.`);
            console.log(ubicacionesOcupadas);
        } else {
            alert("Ubicación no válida o ya ocupada.");
        }
    } else {
        alert("La mesa no existe.");
    }
}
