//Hacemos la funcion ver enunciado para ver el enunciado del ejercicio
function verEnunciado(){
    let enunciado = "<u>Ejercicio 14.</u> <p>.El cálculo de la letra del Documento Nacional de Identidad (DNI) es un proceso matemático\
    sencillo que se basa en obtener el resto de la división entera del número de DNI y el número 23. A partir del resto de la división,\
    se obtiene la letra seleccionándola dentro de un array de letras. El array de letras es:<br>\
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];\
    Por tanto si el resto de la división es 0, la letra del DNI es la T y si el resto es 3 la letra es la A.<br>\
    Con estos datos, realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario un número de DNI\
    y la letra del DNI. La aplicación debe:<br>\
    Comprobar si el número es menor que 0 o mayor que 99999999. Si ese es el caso, se muestra un mensaje al usuario indicando\
    que el número proporcionado no es válido y el programa vuelve a solicitar los datos mencionados<br>\
    Si el número es válido, se calcula la letra que le corresponde según el método explicado anteriormente<br>\
    Una vez calculada la letra, se debe comparar con la letra indicada por el usuario. Si no coinciden, se muestra un mensaje al\
    usuario diciéndole que la letra que ha indicado no es correcta y se le pide de nuevo que introduzca los datos volviendo al punto 1.<br>\
    La aplicación mostrará en la parte destinada para tal efecto, un mensaje indicando que el número y la letra de DNI son correctos y el DNI\
    introducido.</p>"
    document.getElementById("enunciadoAE").innerHTML = enunciado;
}

function verResolucion() {
    let resolucion;
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    var numero;
    var letra;
    
    do {
        numero = prompt("Introduce el número de tu DNI (sin letra)");
        
        // Comprobamos si el número es válido
        if (numero < 0 || numero > 99999999) {
            alert("Número no válido. Debe estar entre 0 y 99999999.");
            numero = null; // Reseteamos el número para volver a solicitarlo
        }

        letra = prompt("Introduce la letra de tu DNI");
        
        var indice = numero % 23;
        var letraCorrecta = letras[indice];

        // Comparamos la letra sea correcta
        if (letra !== letraCorrecta) {
            alert("Letra no válida. Inténtalo de nuevo.");
            letra = null; // Reseteamos la letra para volver a solicitarla
        } else {
            resolucion = `El DNI ${numero}${letraCorrecta} es correcto.`;
        }

    } while (numero == null || letra == null || letra != letraCorrecta); // Condición para seguir solicitando datos

    // Mostramos el resultado final
    document.getElementById("resolucionAE").innerHTML = resolucion;
}


