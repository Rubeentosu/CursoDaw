//Hacemos la funcion ver enunciado para ver el enunciado del ejercicio
function verEnunciado(){
    let enunciado = "<u>Ejercicio 10.</u> <p>Realiza una aplicación web dónde se solicite \
    por pantalla, mediante una ventana emergente, al usuario un número. La aplicación \
    çmostrará en la parte destinada para tal efecto, \"SI\", si el número es primo, \"NO\" \
    en caso contrario.<br>\
    El número puede tomar los valores 1 <= número <= 10000.</p>"
    document.getElementById("enunciadoAE").innerHTML = enunciado;
}

//Hacemos la funcion ver resolucion para ver el resultado del ejercicio
function verResolucion() {
    let numero = parseInt(prompt("Introduce un número entre 1 y 10000:"));
    let resolucion = "";

    // Validar si es un número correcto
    if (numero < 1 || numero > 10000) {
        resolucion = "Por favor, introduce un número válido entre 1 y 10000.";
    }else if (numero == 1) {
        resolucion = "NO"; // El 1 no es primo
    } else {
        // Comprobamos los divisores desde 2 hasta el número
        resolucion = "SI";
        for (let i = 2; i < numero; i++) {
            if (numero % i == 0) {
                resolucion = "NO"; // Si encontramos un divisor, no es primo
            }
        }
    }

    // Mostramos el resultado
    document.getElementById("resolucionAE").innerHTML = resolucion;
}