//Hacemos la funcion ver enunciado para ver el enunciado del ejercicio
function verEnunciado(){
    let enunciado = "<u>Ejercicio 9.</u> <p>Realiza una aplicación web dónde se solicite por pantalla, mediante\
     una ventana emergente, al usuario una secuencia de notas (con valores que van de 0 a 10, sin decimales). \
     La entrada acabará con el valor “-1”.<br>\
    La aplicación mostrará en la parte destinada para tal efecto, \"SI\", si hay algún 10, \"NO\" en caso contrario</p>"
    document.getElementById("enunciadoAE").innerHTML = enunciado;
}

//Hacemos la funcion ver resolucion para ver el resultado del ejercicio
function verResolucion() {
    let resolucion = "no"; // Inicializa una variable a no
    window.alert("Introduce notas");
    var salir = false; // Variable que controla el bucle, comienza como false.

    do {
        // Solicita al usuario que introduzca una nota hasta que ingrese -1.
        let notas = prompt("Introduces notas hasta introducir -1");
        
        // Verifica si la nota introducida está en el rango válido (0 a 10).
        if (notas > 0 && notas <= 10) {
            // Si la nota es 10, se asigna "si" a la variable resolucion.
            if (notas == 10) {
                resolucion = "si";
            }
        }else if (notas == -1) {// Verifica si el usuario ingresó -1 para salir del bucle.
            salir = true; // Cambia la variable salir a true para salir del bucle.
            }else {resolucion = "Nota no valida"; salir = true;}

    } while (!salir) // Continúa el bucle hasta que salir sea true.

    document.getElementById("resolucionAE").innerHTML = resolucion;
}
