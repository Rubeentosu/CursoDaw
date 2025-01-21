// Función para mostrar el enunciado del ejercicio
function verEnunciado() {
    let enunciado = "<u>Ejercicio2.</u> <p> Realiza una aplicación web dónde se simule la pantalla de registro de una web.\
    Para ello la aplicación solicita por pantalla, mediante una ventana emergente, al usuario un \
    email y una contraseña.<br>\
    En primer lugar se le solicita que escoja un email válido cuyas características son:<br>\
    Nombre de usuario, compuesto por letras mayúsculas o minúsculas, o números, o puntos, o guión bajo o alto.<br>\
    Una arroba.<br>\
    El nombre del servidor, que puede contener mayúsculas o minúsculas, o números.<br>\
    El dominio, que podrá estar formado por uno o dos grupos de 2 a 4 letras separados por puntos. Por ejemplo, consideramos válido .es, .com, o .com.es.<br>\
    Se le pedirá que lo haga dos veces, en caso de no coincidir, se volverá a solicitar dicho email hasta que coincida.<br>\
    A continuación, la aplicación mostrará en la parte destinada para tal efecto el siguiente mensaje:<br>\
    “El email escogido es válido<br>\
    Establezca una contraseña”<br>\
    Una vez ingresado el email, la aplicación solicitará que escoja una contraseña válida cuyas características son:<br>\
    Una minúscula<br>\
    Una mayúscula<br>\
    Un dígito<br>\
    No puede incluir espacios<br>\
    Un carácter especial de entre los siguientes #$@!%&? <br>\
    Debe contener mínimo 8 caracteres y máximo 16.<br>\
    Se le pedirá que lo haga dos veces, en caso de no coincidir, se volverá a solicitar dicha contraseña hasta que coincida.<br>\
    A continuación, la aplicación mostrará en la parte destinada para tal efecto el siguiente mensaje:<br>\
    “Email/contraseña configurados con éxito<br>\
    Ingrese los datos de acceso para acceder a la web”<br>\
    Posteriormente se pedirá que se introduzca esa combinación de email/contraseña con un máximo de 3 intentos, si el usuario acierta\
    aparecerá un mensaje de desbloqueo exitoso, en caso contrario, saldrá un mensaje de usuario bloqueado en la parte destinada para tal efecto.\
    </p>"
    document.getElementById("enunciadoAE").innerHTML = enunciado;
}

// Función para la resolución del ejercicio
function verResolucion() {
    // Expresión regular para validar el correo y la contraseña
    let patronEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;0
    let patronContrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#\$@!%&?])(?=\S{8,16}$)/;

    // Pedir correo y contraseña hasta que sean las dos correctas llamando a sus respectivas funciones
    let correo = pedirCorreo(patronEmail);
    let contrasena = pedirContrasena(patronContrasena);

    alert("Correo/contraseña configurados con éxito");
    alert("Ingrese los datos de acceso para acceder a la web:");

    // Ahora llamamos a la funcion de iniciar sesion
    iniciarSesion(correo, contrasena);
}

// Función para iniciar sesión con el correo y la contraseña
function iniciarSesion(correoValido, contrasenaValida) {
    let intentos = 0; 
    const maxIntentos = 3;
    let sesionExitosa = false;

    // Bucle de intentos para la verificación del inicio de sesión
    while (intentos < maxIntentos && !sesionExitosa) {
        let correo = prompt("Introduce tu correo:");
        let contrasena = prompt("Introduce tu contraseña:");

        if (correo === correoValido && contrasena === contrasenaValida) {
            sesionExitosa = true; 
            alert("Desbloqueo exitoso. Has iniciado sesión correctamente.");
        } else {
            alert("Correo o contraseña incorrectos.");
        }

        intentos++;

        // Mostrar los intentos restantes
        if (intentos < maxIntentos && !sesionExitosa) {
            alert(`Tienes ${maxIntentos - intentos} intentos restantes.`);
        }
    }

    if (!sesionExitosa) {
        alert("Usuario bloqueado. Has superado el número máximo de intentos.");
    }
}


// Función para comprobar si la contraseña es valida segun una expresion regular
function comprobarContraseña(contrasena, patron) {
    return patron.test(contrasena);
}

// Función para comprobar si el correo es valido segun una expresion regular
function comprobarCorreo(correo, patron) {
    return patron.test(correo);
}

// Función para pedir un correo y comprobar que son iguales
function pedirCorreo(patronEmail) {
    let correo1, correo2;
    let correosIguales = false;

    // Bucle hasta que que los dos correos sean iguales
    while (!correosIguales) {
        correo1 = prompt("Introduce tu correo:");
        if (comprobarCorreo(correo1, patronEmail)) {
            correo2 = prompt("Introduce de nuevo el correo:");
            if (correo1 === correo2) {
                alert("El correo introducido ha sido almacenado correctamente");
                correosIguales = true;
            } else {
                alert("Los correos no coinciden. Vuelve a intentarlo.");
            }
        } else {
            alert("El correo introducido no tiene un formato válido. Vuelve a intentarlo.");
        }
    }
    return correo1;
}

// Función para pedir una contraseña y comprobar que son iguales
function pedirContrasena(patronContrasena) {
    let contrasena1, contrasena2;
    let contrasenasCoinciden = false;

    // Bucle para pedir la contraseña hasta que sea válida y coincida
    while (!contrasenasCoinciden) {
        contrasena1 = prompt("Establezca una contraseña:");
        if (comprobarContraseña(contrasena1, patronContrasena)) {
            // Bucle para pedir la segunda contraseña hasta que sean iguales
            contrasena2 = prompt("Introduce de nuevo la contraseña:");
            if (contrasena1 === contrasena2) {
                alert("Contraseña introducida ha sido almacenado correctamente");
                contrasenasCoinciden = true;
            } else {
                alert("Las contraseñas no coinciden. Vuelve a intentarlo.");
            }
        } else {
            alert("La contraseña introducida no cumple con las reglas. Debe tener entre 8 y 16 caracteres, al menos una minúscula, una mayúscula, un dígito, un carácter especial y sin espacios.");
        }
    }
    return contrasena1;
}