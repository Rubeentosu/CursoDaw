function verEnunciado() {
    let enunciado = `<u>Ejercicio 4.1 USO DE ESTRUCTURAS DEFINIDAS POR EL USUARIO</u> 
    <p>
        Implementa una aplicación web para gestionar las comandas de los clientes del Kiosko Fernando. Para ello, administramos los clientes que se sientan en cada mesa y que productos pide cada cliente.
        Almacenaremos la siguiente información de cada mesa:<br>
        - Ubicación de la mesa (ver imagen adjunta).<br>
        - Clientes de la mesa (dentro de cada cliente tendremos una serie de productos y para cada producto almacenaremos el nombre y precio).
    </p>`;
    document.getElementById("enunciadoAE").innerHTML = enunciado;
}

const productos = {
    zamburinas: 3.5,
    mejillones: 3.5,
    gambas: 3.5,
    vinoBlanco: 3.5,
    cervezaVictoria: 3.5
};

// Productos definidos
const p_zamburinas = ["zamburiñas", 3.5];
const p_mejillones = ["mejillones", 3.5];
const p_gambas = ["gambas", 3.5];
const p_vinoBlanco = ["vino blanco", 3.5];
const p_cerveVictoria = ["cerveza Victoria", 3.5];

// Contenedor de mesas para evitar ubicaciones duplicadas
const mesasRegistradas = [];

// Clase Mesa
class Mesa {
    constructor(numeroMesa) {
        if (mesasRegistradas.some((mesa) => mesa.numeroMesa === numeroMesa)) {
            alert("Mesa ocupada");
            return;
        }
        this.numeroMesa = numeroMesa;
        this.ubicacionMesa = null;
        this.clientes = []; // Cada cliente será un objeto con id y productos
        mesasRegistradas.push(this);

        this.actualizarHistorial(`Se ha creado la mesa ${numeroMesa}.`);
    }

    // Getter y setter para ubicación de la mesa
    get ubicacion() {
        return this.ubicacionMesa;
    }

    set ubicacion(nuevaUbicacion) {
        this.ubicacionMesa = nuevaUbicacion;
        this.actualizarHistorial(`La mesa ${this.numeroMesa} está ubicada en ${nuevaUbicacion}.`);
    }

    // Getter para el número de clientes
    get numeroClientes() {
        return this.clientes.length;
    }

    // Setter para añadir clientes (define cuántos hay sentados en la mesa)
    set numeroClientes(numero) {
        for (let i = 1; i <= numero; i++) {
            if (!this.clientes.some((cliente) => cliente.id === i)) {
                this.clientes.push({ id: i, productos: [] });
            }
        }
        this.actualizarHistorial(`Se han sentado ${numero} clientes en la mesa ${this.numeroMesa}.`);
    }

    // Añadir producto para un cliente
    addProducto(producto, idCliente) {
        const cliente = this.clientes.find((c) => c.id === idCliente);
        if (!cliente) {
            this.actualizarHistorial(`Error: El cliente ${idCliente} no está sentado en la mesa ${this.numeroMesa}.`);
            return;
        }
        cliente.productos.push(producto);
        this.actualizarHistorial(
            `El cliente ${idCliente} de la mesa ${this.numeroMesa} ha comandado ${producto[0]}.`
        );
    }

    // Obtener comanda completa de la mesa
    get comandaMesa() {
        let total = 0;
        let comanda = `Comanda de la mesa ${this.numeroMesa}:\n<ul>`;
        this.clientes.forEach((cliente) => {
            cliente.productos.forEach((producto) => {
                comanda += `<li>${producto[0]} - ${producto[1]}€</li>`;
                total += producto[1];
            });
        });
        comanda += `</ul>Total: ${total.toFixed(2)}€`;
        this.actualizarHistorial(comanda);
        return comanda;
    }

    // Obtener comanda de un cliente específico
    getComandaCliente(idCliente) {
        const cliente = this.clientes.find((c) => c.id === idCliente);
        if (!cliente) {
            this.actualizarHistorial(`Error: El cliente ${idCliente} no está sentado en la mesa ${this.numeroMesa}.`);
            return;
        }
        let total = 0;
        let comanda = `Comanda del cliente ${idCliente} de la mesa ${this.numeroMesa}:\n<ul>`;
        cliente.productos.forEach((producto) => {
            comanda += `<li>${producto[0]} - ${producto[1]}€</li>`;
            total += producto[1];
        });
        comanda += `</ul>Total: ${total.toFixed(2)}€`;
        this.actualizarHistorial(comanda);
        return comanda;
    }

    // Borrar mesa
    borrarMesa() {
        const index = mesasRegistradas.findIndex((mesa) => mesa.numeroMesa === this.numeroMesa);
        if (index !== -1) {
            mesasRegistradas.splice(index, 1);
            this.actualizarHistorial(`Se ha borrado la mesa ${this.numeroMesa}.`);
        }
    }

    // Método para actualizar el historial en el <body>
    actualizarHistorial(mensaje) {
        const body = document.querySelector("body");
        const p = document.createElement("p");
        p.innerHTML = mensaje;
        body.appendChild(p);
    }
}

// Ejemplo de uso
const mesa1 = new Mesa(1);
mesa1.ubicacion = "Terraza";
mesa1.numeroClientes = 3;

mesa1.addProducto(p_zamburinas, 1);
mesa1.addProducto(p_vinoBlanco, 2);
mesa1.addProducto(p_cerveVictoria, 3);

mesa1.comandaMesa; // Mostrar comanda completa
mesa1.getComandaCliente(1); // Mostrar comanda de un cliente específico
mesa1.borrarMesa();
