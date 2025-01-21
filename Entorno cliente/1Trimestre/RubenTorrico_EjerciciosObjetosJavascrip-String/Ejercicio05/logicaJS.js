//Hacemos la funcion ver enunciado para ver el enunciado del ejercicio
function verEnunciado(){
    let enunciado = "<u>Ejercicio 5.</u> <p>Realiza una aplicación web dónde se solicite por pantalla,\
     mediante una ventana emergente, al usuario un código de cliente.<br>\
Dicho código contiene tres partes separadas por un guión:<br>\
Dos caracteres:  CP: cliente particular, CE: empresa<br>\
Dos dígitos: 10 Local, 11 Autonómico, 12 Nacional, 20 Internacional<br>\
Una cifra que indica el número de años de antigüedad del cliente.<br>\
Crea una función que decodifique dicho código de cliente. Adicionalmente, si el código es erróneo la función deberá\
informar del tipo de error o errores.</p>"
    document.getElementById("enunciadoAE").innerHTML = enunciado;
}

//Hacemos la funcion ver resolucion para ver el resultado del ejercicio
function verResolucion(){
    let resolucion="";
    let codigo = prompt("Introduce tu codigo separado por guiones:");
    resolucion = descodificarCodigo(codigo);
    document.getElementById("resolucionAE").innerHTML = resolucion;
}
function descodificarCodigo(codigo) {
    let caracter = "", origen = "", solucion = "";
    let caratValido = false, digitoValido = false, anioValido = false;
    let patron = /-/;

    if (!patron.test(codigo)) {
        return solucion = "Introduce el código separado por guiones";
    } else {
        let cadena = codigo.split("-");

        if (cadena[0] === "CP") {
            caracter = "un cliente particular";
            caratValido = true;
        } else if (cadena[0] === "CE") {
            caracter = "una empresa";
            caratValido = true;
        } else {
            solucion = "El tipo de cliente introducido no es correcto";
            return solucion;
        }

        if (cadena[1] === "10") {
            origen = "Local";
            digitoValido = true;
        } else if (cadena[1] === "11") {
            origen = "Autonómico";
            digitoValido = true;
        } else if (cadena[1] === "12") {
            origen = "Nacional";
            digitoValido = true;
        } else if (cadena[1] === "20") {
            origen = "Internacional";
            digitoValido = true;
        } else {
            solucion = "El tipo de origen no es válido";
            return solucion;
        }

        let patronNumeros = /\d/;
        if (patronNumeros.test(cadena[2])) {
            anios = cadena[2];
            anioValido = true;
        } else {
            solucion = "Los años de antigüedad solo pueden ser números";
            return solucion;
        }

        if (caratValido && digitoValido && anioValido) {
            solucion = `El código introducido pertenece a ${caracter} de origen ${origen} con ${anios} años de antigüedad.`;
        }
    }

    return solucion;
}
