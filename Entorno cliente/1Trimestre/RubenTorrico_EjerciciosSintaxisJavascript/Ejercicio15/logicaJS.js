//Hacemos la funcion ver enunciado para ver el enunciado del ejercicio
function verEnunciado() {
    let enunciado = "<u>Ejercicio 15.</u> <p>El factorial de un número entero n es una operación matemática que consiste en multiplicar\
     todos los factores así:<br>\
     n x (n-1) x (n-2) x ... x 1<br>\
    Así, el factorial de 5 (escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120.<br>\
    Con estos datos, realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario un número.\
    La aplicación mostrará en la parte destinada para tal efecto, su factorial.<br>\
    Dado que solo se puede calcular el factorial de un número natural, si se introduce un número negativo mostrar un mensaje de error y volver\
    a pedir el número al usuario.</p>"
    document.getElementById("enunciadoAE").innerHTML = enunciado;
}

//Hacemos la funcion ver resolucion para ver el resultado del ejercicio
function verResolucion() {
    // Declaramos la variable
    let resolucion = "";
    window.alert("Vamos a sacar el factorial de un número");

    // Pedimos al usuario que introduzca un número 
    let numero = parseInt(prompt("Introduce un número:"));
    // Validamos si el número introducido no es un número o si es menor o igual a 0
    if (isNaN(numero) || numero < 0) {
        resolucion = "Por favor, introduce un número válido mayor que 0.";
    } if(numero == 0){
        factorial = 1;
        resolucion = `El factorial de ${numero}! es: ${factorial}`;
    }else {
        // Si el número es válido, inicializamos la variable 'factorial' en 1
        let factorial = 1;

        // Bucle que multiplica el valor de 'factorial' por cada número desde 'numero' hasta 1
        for (let i = numero; i >= 1; i--) {
            factorial *= i;  // Multiplicamos 'factorial' por el valor actual de 'i'
        }
        // Asignamos el resultado final a la variable
        resolucion = `El factorial de ${numero}! es: ${factorial}`;
    }
    document.getElementById("resolucionAE").innerHTML = resolucion;
}

