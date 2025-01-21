//Hacemos la funcion ver enunciado para ver el enunciado del ejercicio
function verEnunciado(){
    let enunciado = "<u>Ejercicio 10.</u> <p>Realiza una aplicación web dónde se muestren dos botones:<br>\
Encriptar mensaje<br>\
Desencriptar mensaje<br>\
Una vez pulsado el botón la aplicación solicitará por pantalla, mediante una ventana emergente, al usuario un mensaje y una clave numérica.<br>\
La aplicación empleará el alfabeto Unicode para codificar/decodificar el mensaje, dependiendo del botón clicado desplazando, cada carácter un número de veces igual al número que corresponda en la clave.<br>\
Muestra en la parte destinada para tal efecto de la aplicación web el mensaje encriptado/desencriptado.<br>\
El procedimiento manual para cifrar el mensaje sigue la siguiente heurística.<br>\
Mensaje: Este es el mensaje<br>\
Clave: 12345<br>\
Mensaje cifrado: Fuwi%fu#iq!ohrxblh<br>\
El mensaje cifrado se forma de esta manera:<br>\
• E + 1 = F<br>\
• s + 2 = u<br>\
• t + 3 = w<br>\
• e + 4 = i<br>\
• (espacio en blanco) + 5 = %<br>\
• e + 1 = f<br>\
• s + 2 = u<br>\
• etc.</p>"
    document.getElementById("enunciadoAE").innerHTML = enunciado;
}

// Función para mostrar el enunciado del ejercicio
function verEnunciado() {
    let enunciado = "<u>Ejercicio 10.</u> <p>Realiza una aplicación web dónde se muestren dos botones:<br>\
Encriptar mensaje<br>\
Desencriptar mensaje<br>\
Una vez pulsado el botón la aplicación solicitará por pantalla, mediante una ventana emergente, al usuario un mensaje y una clave numérica.<br>\
La aplicación empleará el alfabeto Unicode para codificar/decodificar el mensaje, dependiendo del botón clicado desplazando, cada carácter un número de veces igual al número que corresponda en la clave.<br>\
Muestra en la parte destinada para tal efecto de la aplicación web el mensaje encriptado/desencriptado.<br>\
El procedimiento manual para cifrar el mensaje sigue la siguiente heurística.<br>\
Mensaje: Este es el mensaje<br>\
Clave: 12345<br>\
Mensaje cifrado: Fuwi%fu#iq!ohrxblh<br>\
El mensaje cifrado se forma de esta manera:<br>\
• E + 1 = F<br>\
• s + 2 = u<br>\
• t + 3 = w<br>\
• e + 4 = i<br>\
• (espacio en blanco) + 5 = %<br>\
• e + 1 = f<br>\
• s + 2 = u<br>\
• etc.</p>";
    document.getElementById("enunciadoAE").innerHTML = enunciado;
}

// Función para cifrar el mensaje
function cifrar() {
    // Solicita al usuario un mensaje y una clave numérica
    let cadena = prompt("Introduce una cadena para cifrar:");
    let clave = prompt("Introduce la clave numérica para cifrar:");

    // Variable para almacenar el mensaje cifrado
    let resolucion = "";

    // Recorre cada carácter del mensaje
    for (let i = 0; i < cadena.length; i++) {
        // Obtiene el código ASCII del carácter
        let caracterCodificado = cadena.charCodeAt(i);

        // Usa el índice 'i' y la clave para calcular el desplazamiento
        let desplazamiento = parseInt(clave[i % clave.length]);

        // Desplaza el código del carácter por el valor calculado
        let nuevoCaracterCodificado = caracterCodificado + desplazamiento;

        // Añade el carácter cifrado al resultado
        resolucion += String.fromCharCode(nuevoCaracterCodificado);
    }
    document.getElementById("resolucionAE").innerHTML = "Mensaje cifrado: " + resolucion;
}

// Función para descifrar el mensaje
function desCifrar() {
    // Solicita al usuario un mensaje cifrado y una clave numérica
    let cadena = prompt("Introduce un mensaje cifrado:");
    let clave = prompt("Introduce la clave numérica para descifrar:");

    // Variable para almacenar el mensaje descifrado
    let resolucion = "";

    // Recorre cada carácter del mensaje cifrado
    for (let i = 0; i < cadena.length; i++) {
        // Obtiene el código ASCII del carácter cifrado
        let caracterCodificado = cadena.charCodeAt(i);

        // Usa el índice 'i' y la clave para calcular el desplazamiento
        let desplazamiento = parseInt(clave[i % clave.length]);

        // Desplaza el código del carácter en sentido inverso para descifrar
        let nuevoCaracterCodificado = caracterCodificado - desplazamiento;

        // Añade el carácter descifrado al resultado
        resolucion += String.fromCharCode(nuevoCaracterCodificado);
    }
    document.getElementById("resolucionAE").innerHTML = "Mensaje descifrado: " + resolucion;
}



