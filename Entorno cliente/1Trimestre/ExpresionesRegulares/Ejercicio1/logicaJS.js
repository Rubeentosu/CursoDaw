//Hacemos la funcion ver enunciado para ver el enunciado del ejercicio
function verEnunciado(){
    let enunciado = "<u>Ejercicio1.</u> <p> Validar correo electronico que puede ser (dividido por informacion de usuario y dominio de correo)\
    utilizando expresiones regulares <br>\
    1. carmelo123@gmail.com <br>\
    2. Carmelo_Jaen@gmail.com <br>\
    3. carmelo-jaen@gmail.com <br>\
    4. Carmelo.jaen@gmail.com <br>\
    5. carmelo@gmail.com.es <br>\
    6. carmelo.jaen-diaz@gmail.site <br>\
    </p>"
    document.getElementById("enunciadoAE").innerHTML = enunciado;
}

function verResolucion() {
    // Expresión regular para validar correos
    let patron = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9_-]+\.[a-zA-Z]{2,4}(\.[a-zA-Z]{2,4})?$/;
    let salir = false;

    // Bucle que sigue pidiendo el correo hasta que sea válido
    while (!salir) {
        let correo = prompt("Introduce un correo:");
        if (comprobarCorreo(correo, patron)) {
            salir = true;
            alert("El correo introducido ha sido almacenado correctamente");
        } else {
            alert("El correo introducido no tiene un formato válido, vuelve a intentarlo.");
        }
    }
}

function comprobarCorreo(correo, patron) {
    // Verifica si el correo cumple con el patrón
    return patron.test(correo);
}
