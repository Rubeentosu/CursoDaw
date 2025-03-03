//Comprobación de que el navegador soporta Web Storage
if (typeof Storage !== "undefined") {
    //Comprobamos si ya existe un usuario en localStorage
    if (localStorage.getItem("usuario") !== null) {
        document.getElementById("mensajeBienvenida").innerHTML = "¡Bienvenido de nuevo, " + localStorage.getItem("usuario") + "!, ¿repetimos?";
    } else {
        let usuario = prompt("¿Cómo te llamas?");
        if (usuario) {
            localStorage.setItem("usuario", usuario);
            document.getElementById("mensajeBienvenida").innerHTML = "¡Bienvenido " + usuario + ", qué delicatessen deseas probar hoy!";
        }
    }

    //Eventos de los botones
    document.getElementById("realizarPedido").addEventListener("click", validarPedido);
    document.getElementById("verPedido").addEventListener("click", verPedido);
    document.getElementById("borrarPedido").addEventListener("click", borrarPedido);
    document.getElementById("logout").addEventListener("click", cerrarSesion);

    //Evento para los botones de "Comprar"
    let botonesComprar = document.getElementsByClassName("buy-button");
    for (let i = 0; i < botonesComprar.length; i++) {
        botonesComprar[i].addEventListener("click", function () {
            let nombreProducto = botonesComprar[i].getAttribute("data-nombre");
            let precioProducto = parseFloat(botonesComprar[i].getAttribute("data-precio"));
            agregarProducto(nombreProducto, precioProducto);
        });
    }
} else {
    alert("El navegador no soporta Web Storage");
}

//Función para agregar el producto al carrito
function agregarProducto(nombreProducto, precioProducto) {
    if (isNaN(precioProducto) || precioProducto <= 0) {
        alert("El precio del producto no es válido.");
        return;
    }

    let carrito = localStorage.getItem("carrito");
    if (!carrito) {
        carrito = "";
    }

    let productos = carrito.split(";");
    let productoExistente = false;

    for (let i = 0; i < productos.length; i++) {
        let producto = productos[i].split(",");
        //Si el producto ya existe, aumentamos la cantidad
        if (producto[0] === nombreProducto) {
            let nuevaCantidad = parseInt(producto[1]) + 1;
            productos[i] = `${nombreProducto},${nuevaCantidad},${precioProducto}`;
            productoExistente = true;
            break;
        }
    }

    if (!productoExistente) {
        productos.push(`${nombreProducto},1,${precioProducto}`);
    }

    //Almacenamos los productos en localStorage
    localStorage.setItem("carrito", productos.join(";"));
    actualizarCarrito();
}

//Función para actualizar el carrito
function actualizarCarrito() {
    let carrito = localStorage.getItem("carrito");
    let carritoContainer = document.getElementById("resumenCarrito");
    carritoContainer.innerHTML = '';

    //Si el carrito está vacío, mostramos un mensaje
    if (!carrito || carrito === "") {
        carritoContainer.innerHTML = "Tu carrito está vacío.";
        return;
    }

    let total = 0;
    let productos = carrito.split(";");
    //Recorremos los productos del carrito
    for (let i = 0; i < productos.length; i++) {
        let [nombre, cantidad, precio] = productos[i].split(",");
        //Validamos que los datos sean correctos
        if (!nombre || isNaN(cantidad) || isNaN(precio)) {
            continue;
        }

        let divProducto = document.createElement("div");
        divProducto.innerHTML = `${nombre} - ${cantidad} x ${precio} €`;
        carritoContainer.appendChild(divProducto);
        total += parseFloat(precio) * parseInt(cantidad);
    }

    let totalDiv = document.createElement("div");
    totalDiv.innerHTML = `Total: ${total} €`;
    carritoContainer.appendChild(totalDiv);
}

//Función para ver el resumen del carrito
function verPedido() {
    document.getElementById("resumenPedido").scrollIntoView();
}

//Función de validación antes de realizar el pedido
function validarPedido(evento) {
    evento.preventDefault();  //Prevenir el envío del formulario

    //Validación de los campos de contacto
    let nombre = document.getElementById("nombre").value;
    let primerApellido = document.getElementById("primerApellido").value;
    let segundoApellido = document.getElementById("segundoApellido").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("email").value;
    let direccion = document.getElementById("direccion").value;

    //Validar que todos los campos sean completos
    if (!nombre || !primerApellido || !telefono || !email || !direccion) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    //Almacenamos los datos en localStorage
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("primerApellido", primerApellido);
    localStorage.setItem("segundoApellido", segundoApellido);
    localStorage.setItem("telefono", telefono);
    localStorage.setItem("email", email);
    localStorage.setItem("direccion", direccion);

    let confirmacion = confirm("¿Deseas enviar los datos de contacto a la web?");
    if (confirmacion) {
        alert("Tus datos se han enviado correctamente.");
    } else {
        // Si el usuario no quiere enviar los datos, los eliminamos del localStorage
        localStorage.removeItem("nombre");
        localStorage.removeItem("primerApellido");
        localStorage.removeItem("segundoApellido");
        localStorage.removeItem("telefono");
        localStorage.removeItem("email");
        localStorage.removeItem("direccion");
        alert("Tus datos no se han almacenado.");
    }

    actualizarContenedorDatos();  //Mostrar los datos de contacto almacenados
}

//Función para actualizar el contenedor de datos
function actualizarContenedorDatos() {
    let contenedor = document.getElementById("contenedorDatos");

    let nombre = localStorage.getItem("nombre");
    let primerApellido = localStorage.getItem("primerApellido");
    let segundoApellido = localStorage.getItem("segundoApellido");
    let telefono = localStorage.getItem("telefono");
    let email = localStorage.getItem("email");
    let direccion = localStorage.getItem("direccion");

    //Mostrar los datos de contacto almacenados
    if (nombre && primerApellido && telefono && email && direccion) {
        contenedor.innerHTML = `
            <h3>Datos de contacto:</h3>
            <p>Nombre: ${nombre} ${primerApellido} ${segundoApellido || ""}</p>
            <p>Teléfono: ${telefono}</p>
            <p>Email: ${email}</p>
            <p>Dirección: ${direccion}</p>
        `;
    } else {
        contenedor.innerHTML = "Actualmente no hay datos de contacto.";
    }
}

//Función para borrar el carrito
function borrarPedido() {
    localStorage.removeItem("carrito");
    document.getElementById("resumenCarrito").innerHTML = "Actualmente no hay productos en el carrito.";
    alert("El carrito ha sido vaciado.");
}

//Función para cerrar sesión
function cerrarSesion() {
    localStorage.removeItem("usuario");
    localStorage.removeItem("nombre");
    localStorage.removeItem("primerApellido");
    localStorage.removeItem("segundoApellido");
    localStorage.removeItem("telefono");
    localStorage.removeItem("email");
    localStorage.removeItem("direccion");
    localStorage.removeItem("carrito");
    alert("Has cerrado sesión correctamente.");
}
