//Hacemos la funcion ver enunciado para ver el enunciado del ejercicio
function verEnunciado(){
    let enunciado = "<u>Ejercicio 8.</u> <p>Realiza una aplicación web dónde se solicite por pantalla,\
     mediante una ventana emergente, al usuario dos números X e Y.\
    La aplicación mostrará en la parte destinada para tal efecto, la tabla de multiplicar del número X,\
     hasta el valor Y, controlando las siguientes condiciones:<br>\
    -50 <= X <= 50<br>\
    1 <= Y <= 20<br>\
    La tabla se mostrará con una entrada por línea y entre cada elemento habrá un único espacio de separación.</p>"
    document.getElementById("enunciadoAE").innerHTML = enunciado;
}

//Hacemos la funcion ver resolucion para ver el resultado del ejercicio
function verResolucion() {
    let resolucion = ""; // Inicializa una variable para almacenar los resultados de las multiplicaciones.
    window.alert("Introduce dos numeros: X e Y");

    var x = prompt("Número X: "); // Solicita el número X.
    var y = prompt("Numero Y: "); // Solicita el número Y.
    
    // Verifica si el número X está en el rango permitido (-50 a 50).
    if (x >= -50 && x <= 50) {
        // Verifica si el número Y está en el rango permitido (1 a 20).
        if (y >= 1 && y <= 20) {
            // Bucle que genera la tabla de multiplicar para el número X desde 1 hasta Y.
            for (let i = 1; i <= y; i++) {
                // Añade a la variable el resultado de la multiplicación.
                resolucion += x + " x " + i + " = " + (x * i) + "<br>";
            }
        } else {
            // Si Y no está en el rango, asigna un mensaje de error.
            resolucion = "El numero no esta entre 1 y 20"; 
        }
    } else {
        // Si X no está en el rango, asigna un mensaje de error
        resolucion = "El numero no esta entre -50 y 50"; 
    }

    document.getElementById("resolucionAE").innerHTML = resolucion;
}
