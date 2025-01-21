//Hacemos la funcion ver enunciado para ver el enunciado del ejercicio
function verEnunciado() {
    let enunciado = "<u>Ejercicio 7.</u> <p></p>"
    document.getElementById("enunciadoAE").innerHTML = enunciado;
}

// Función principal que solicita la frase o palabra al usuario
function verResolucion() {
    let frase = prompt("Introduce una frase:");
    let palabra1 = prompt("Introduce la primera palabra:");
    let palabra2 = prompt("Introduce la segunda palabra:");

    let resultado = insertarPalabra(frase, palabra1, palabra2);
    document.getElementById("resolucionAE").innerHTML = resultado;
}

// Función que inserta la palabra
function insertarPalabra(frase, palabra1, palabra2) {
    // Vemos si esta la palabra en la frase sino retorna la frase sin modificaciones
    if (frase.includes(palabra1)) {
        // Reemplazar la primera palabra por la primera palabra seguida de la segunda
        return frase.replace(palabra1, palabra1 + " " + palabra2+" ");
    }

    return frase;
}