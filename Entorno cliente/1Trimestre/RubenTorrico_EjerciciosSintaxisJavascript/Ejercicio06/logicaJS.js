//Hacemos la funcion ver enunciado para ver el enunciado del ejercicio
function verEnunciado(){
    let enunciado = "<u>Ejercicio 6.</u> <p>Realiza una aplicación web dónde se solicite por pantalla, mediante una \
    ventana emergente, al usuario un número N. La aplicación mostrará en la parte destinada para tal efecto, todos \
    los pares desde 2 hasta N (inclusive), con las siguientes condiciones:<br>\
    Cada número se mostrará en una línea distinta.<br>\
    Controlar que N siempre será mayor o igual a 2. En caso contrario, mostrar advertencia y volver a solicitar N.</p>"
    document.getElementById("enunciadoAE").innerHTML = enunciado;
}

//Hacemos la funcion ver resolucion para ver el resultado del ejercicio
function verResolucion() {
    let resolucion = ""; // Inicializa una variable para almacenar los números pares que se mostrarán.
    window.alert("Introduce un número mayor o igual a 2"); 

    var numero = prompt("Número: "); // Solicita un número.

    // Verifica si el número ingresado es mayor o igual a 2.
    if (numero >= 2) {
        // Bucle desde 2 hasta el número ingresado.
        for (i = 2; i <= numero; i++) {
            // Verifica si el número es par.
            if (i % 2 == 0) {
                // Si es par, se agrega a la variable
                resolucion += i + "<br>"; 
            }      
        }
    } else {
        // Si el número es menor que 2, se entra en un bucle do while para solicitar un nuevo número.
        do {
            window.alert("Número no válido");
            numero = prompt("Introduce otro número");
        } while (numero < 2); // Continúa solicitando un número hasta que sea mayor o igual a 2.

        // Después de obtener un número válido, se repite el proceso para encontrar los números pares.
        for (i = 2; i <= numero; i++) {
            // Verifica si el número es par.
            if (i % 2 == 0) {
                // Si es par, se agrega a la variable
                resolucion += i + "<br>"; 
            }      
        }
    }
    document.getElementById("resolucionAE").innerHTML = resolucion;
}
