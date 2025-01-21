//Hacemos la funcion ver enunciado para ver el enunciado del ejercicio
function verEnunciado(){
    let enunciado = "<u>Ejercicio 4.</u> <p>Realiza una aplicación web dónde se solicite por pantalla, mediante una\
    ventana emergente, al usuario una cadena y el carácter buscado.<br>\
    Crea una función recursiva que cuente el número de veces que el carácter introducido por el usuario\
    aparece en la cadena introducida por el usuario.</p>"
    document.getElementById("enunciadoAE").innerHTML = enunciado;
}

//Hacemos la funcion ver resolucion para ver el resultado del ejercicio
function verResolucion(){
    let resolucion="";
    let cadena = prompt("Introduce una cadena:" )
    let caracter = prompt("Introduce un caracter:" )
    resolucion = contarCaracter(cadena,caracter);
    document.getElementById("resolucionAE").innerHTML = resolucion;
}
function contarCaracter(cadena, caracter, posicion = 0) {
    // Inicializamos el contador
    let contador = 0;

    if (posicion >= cadena.length) {
        return contador;
    }

    if (cadena.charAt(posicion) === caracter) {
        contador++;
    }

    // Llamamos recursivamente con la siguiente posición y sumamos el contador
    return contador + contarCaracter(cadena, caracter, posicion+1);
}
