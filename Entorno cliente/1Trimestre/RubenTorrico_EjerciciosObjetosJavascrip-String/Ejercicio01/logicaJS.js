//Hacemos la funcion ver enunciado para ver el enunciado del ejercicio
function verEnunciado(){
    let enunciado = "<u>Ejercicio 1.</u> <p>Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana\
    emergente, al usuario una cadena de caracteres.<br>\
    Crea una función que reciba como argumento esa cadena de caracteres y\
    devuelva una cadena con todas las vocales y el número de veces que aparece cada una en la cadena argumento. </p>";
    document.getElementById("enunciadoAE").innerHTML = enunciado;
}

//Hacemos la funcion ver resolucion para ver el resultado del ejercicio
function verResolucion(){
    let resolucion="";
    let cadena = prompt("Introduce una cadena:" )
    resolucion = contarVocales(cadena);
    document.getElementById("resolucionAE").innerHTML = resolucion;
}

function contarVocales(cadena) {
    //inicio los contadores
    let contadorA = 0, contadorE = 0, contadorI = 0, contadorO = 0, contadorU = 0;
    
    //recorro toda la cadena
    for (let i = 0; i < cadena.length; i++) { 

        //Paso a minuscula acada letra
        let letra = cadena[i].toLowerCase();

        //por cada letra que sea igual a la vocal suma el contador
        if (letra == 'a') {
            contadorA++;
        } else if (letra == 'e') {
            contadorE++;
        } else if (letra == 'i') {
            contadorI++;
        } else if (letra == 'o') {
            contadorO++;
        } else if (letra == 'u') {
            contadorU++;
        }
    }
    
    //Retornamos el mensaje
    return `El número de vocales en la cadena es a:${contadorA}, e:${contadorE}, i:${contadorI}, o:${contadorO}, u:${contadorU}`;
}
