//Hacemos la funcion ver enunciado para ver el enunciado del ejercicio
function verEnunciado(){
    let enunciado = "<u>Ejercicio 12.</u> <p>Realiza una aplicación web dónde se solicite por pantalla,\
    mediante una ventana emergente, al usuario una secuencia de números enteros.<br>\
    Adicionalmente, la aplicación pedirá al usuario un número comprendido del 1 al 100 \
    que determinará la cantidad de números de la secuencia mencionada. Tras ello se leerán X\
    números en las próximas X ventanas emergentes.<br>\
    La aplicación mostrará en la parte destinada para tal efecto, el número más alto y el más bajo, cada \
    uno en una línea distinta.</p>"
    document.getElementById("enunciadoAE").innerHTML = enunciado;
}

//Hacemos la funcion ver resolucion para ver el resultado del ejercicio
function verResolucion() {
    let cantidad; // Variable para almacenar la cantidad de números a introducir
    let numero; // Variable para almacenar cada número ingresado
    let maximo; // Variable para almacenar el número máximo
    let minimo; // Variable para almacenar el número mínimo

    // Solicita al usuario un número entre 1 y 100 que determina cuántos números se ingresarán
    do {
        cantidad = parseInt(prompt("Introduce un número entre 1 y 100:"));
    } while (cantidad < 1 || cantidad > 100); // Valida que el número esté en el rango permitido

    // Inicializa maximo y minimo con el primer número ingresado
    for (let i = 0; i < cantidad; i++) {
        numero = parseInt(prompt("Introduce un número entero:")); // Solicita un número entero

        // Inicializa maximo y minimo en la primera iteración
        if (i == 0) {
            maximo = numero;
            minimo = numero;
        } else {
            // Actualiza el número máximo y mínimo según el número ingresado
            if (numero > maximo) {
                maximo = numero;
            }
            if (numero < minimo) {
                minimo = numero;
            }
        }
    }
    document.getElementById("resolucionAE").innerHTML = 
        "Número más alto: " + maximo + "<br>" +
        "Número más bajo: " + minimo;
}