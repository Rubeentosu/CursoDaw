//Hacemos la funcion ver enunciado para ver el enunciado del ejercicio
function verEnunciado(){
    let enunciado = "<u>Ejercicio 13.</u> <p>Realiza una aplicación web dónde se solicite por pantalla,\
     mediante una ventana emergente, al usuario una secuencia de números enteros.\
<br>Adicionalmente, la aplicación pedirá al usuario un número comprendido del 1 al 100 que determinará\
 la cantidad de números de la secuencia mencionada. Tras ello se leerán X números en las próximas\
  X ventanas emergentes.\
<br>La aplicación mostrará en la parte destinada para tal efecto, la línea en orden inverso.</p>"
    document.getElementById("enunciadoAE").innerHTML = enunciado;
}

//Hacemos la funcion ver resolucion para ver el resultado del ejercicio
function verResolucion() {
    // Inicializamos una variable para la cantidad de números
    let cantidad;
    // Inicializamos una variable para almacenar los números ingresados en orden inverso
    let numerosInversos = "";

    // Pedimos al usuario un número entre 1 y 100
    do {
        cantidad = parseInt(prompt("Introduce un número entre 1 y 100:"));
    } while (cantidad < 1 || cantidad > 100); // Repetimos hasta que el número sea válido

    // Ahora pedimos la cantidad de números que el usuario quiere ingresar
    for (let i = 0; i < cantidad; i++) {
        let numero = parseInt(prompt("Introduce un número entero:"));
        // Añadimos cada número en orden inverso a la variable
        numerosInversos = numero + "<br>" + numerosInversos; // Concatenamos el nuevo número antes de los anteriores
    }
    document.getElementById("resolucionAE").innerHTML = numerosInversos;
}