//Hacemos la funcion ver enunciado para ver el enunciado del ejercicio
function verEnunciado(){
    let enunciado = "<u>Ejercicio 8.</u> <p>Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario una frase o palabra.<br>\
Crea una función que reciba dicha frase o palabra, como resultado la función determinará si es o no un palíndromo.<br>\
Un palíndromo es una palabra o frase cuyas letras están dispuestas de tal manera que resulta la misma leída de izquierda a derecha que de derecha a izquierda; por ejemplo, anilina; dábale arroz a la zorra el abad.<br>\
Muestra en la parte destinada para tal efecto de la aplicación web la salida de la función anterior.<br>\
</p>"
    document.getElementById("enunciadoAE").innerHTML = enunciado;
}

// Función principal que solicita la frase o palabra al usuario
function verResolucion() {
    let frase = prompt("Introduce una palabra o frase:");

    // Llamada a la función para comprobar si es palíndromo
    let resultado = esPalindromo(frase);
    document.getElementById("resolucionAE").innerHTML = resultado;
}

// Función que comprueba si es un palíndromo
function esPalindromo(frase) {
    // Eliminamos espacios, convertimos a minúsculas y quitamos las tildes
    let texto = frase.replace(/\s+/g, '').toLowerCase();
        texto = texto.replace('á', 'a');
        texto = texto.replace('é', 'e');
        texto = texto.replace('í', 'i');
        texto = texto.replace('ó', 'o');
        texto = texto.replace('ú', 'u');

    for (let i = 0; i < texto.length / 2; i++) {
        // Compara cada caracter
        if (texto[i] !== texto[texto.length - 1 - i]) {
            return `${frase} -> no es un palíndromo.`;
        }
    }

    return `${frase} -> es un palíndromo.`;
}