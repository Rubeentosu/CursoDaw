//Hacemos la funcion ver enunciado para ver el enunciado del ejercicio
function verEnunciado(){
    let enunciado = "<u>Ejercicio 7.</u> <p>Realiza una aplicación web dónde se solicite por pantalla,\
    mediante una ventana emergente, al usuario un número N. La aplicación mostrará en la parte destinada\
     para tal efecto, todos los impares desde N (inclusive) hasta 1, con las siguientes condiciones:<br>\
    Cada número se mostrará en una línea distinta.<br>\
    Controlar que N siempre será mayor o igual a 1. En caso contrario, mostrar advertencia y volver a solicitar N</p>"
    document.getElementById("enunciadoAE").innerHTML = enunciado;
}

//Hacemos la funcion ver resolucion para ver el resultado del ejercicio
function verResolucion() {
    let resolucion = "";
    window.alert("Introduce un número mayor o igual a 2"); 

    var numero = prompt("Número: "); // Solicita al usuario que introduzca un número.

    // Verifica si el número ingresado es mayor o igual a 1.
    if (numero >= 1) {
        // Bucle que itera desde 1 hasta el número
        for (i = 1; i <= numero; i++) {
            // Verifica si el número es impar.
            if (i % 2 != 0) {
                // Si es impar, se agrega a la variable
                resolucion += i + "<br>"; 
            }      
        }
    } else {
        // Si el número es menor que 1, se entra en un bucle do while para solicitar un nuevo número.
        do {
            alert("Número no válido"); // Muestra un mensaje de alerta indicando que el número no es válido.
            numero = prompt("Introduce otro número"); // Solicita al usuario que introduzca otro número.
        } while (numero < 1); // Continúa solicitando un número hasta que sea mayor o igual a 1.

        // Después de obtener un número válido, se repite el proceso para encontrar los impares.
        for (i = 1; i <= numero; i++) {
            // Verifica si el número es impar.
            if (i % 2 != 0) {
                // Si es impar, se agrega a la variable
                resolucion += i + "<br>"; 
            }      
        }
    }
    document.getElementById("resolucionAE").innerHTML = resolucion;
}
