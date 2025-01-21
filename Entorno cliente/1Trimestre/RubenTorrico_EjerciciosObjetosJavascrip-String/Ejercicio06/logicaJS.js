//Hacemos la funcion ver enunciado para ver el enunciado del ejercicio
function verEnunciado(){
    let enunciado = "<u>Ejercicio 6.</u> <p>Realiza una aplicación web dónde se solicite por pantalla,\
    mediante una ventana emergente, al usuario dos cadenas.<br>\
    Crea una función que sea capaz de encontrar los caracteres comunes entre dos palabras. La función recibe como \
    argumentos dos palabras o frases y devuelve una cadena con los caracteres que haya en común entre ambas ordenados de menor a mayor.\
    Se desechan los espacios en blanco. No se tiene en cuenta el caso (mayúsculas o minúsculas)</p>";
    document.getElementById("enunciadoAE").innerHTML = enunciado;
}

//Hacemos la funcion ver resolucion para ver el resultado del ejercicio
function verResolucion() {
    let resolucion = "";

    let cadena1 = prompt("Introduce una primera cadena:");
    let cadena2 = prompt("Introduce una segunda cadena:");

    resolucion = caracteresComunes(cadena1, cadena2);
    document.getElementById("resolucionAE").innerHTML = resolucion;
}

// Función que devuelve los caracteres comunes entre dos cadenas
function caracteresComunes(cadena1, cadena2) {
    // Eliminar espacios en blanco y convertir a minúsculas
    let patronEspacios = / /g;
    cadena1 = cadena1.replace(patronEspacios, "").toLowerCase();
    cadena2 = cadena2.replace(patronEspacios, "").toLowerCase();
    let comunes = [];

    // Recorrer la primera cadena
    for (let i = 0; i < cadena1.length; i++) {
        let letra = cadena1[i];
        // Si el carácter está en la segunda cadena y no está ya en el array de comunes
        if (cadena2.includes(letra) && !comunes.includes(letra)) {
            comunes.push(letra);
        }
    }
    // Ordenar los caracteres comunes alfabéticamente
    comunes.sort();
    return comunes;
}
