//Hacemos la funcion ver enunciado para ver el enunciado del ejercicio
function verEnunciado(){
    let enunciado = "<u>Ejercicio 1.</u> <p>Realiza una aplicación web que simule el comportamiento del juego de La Quiniela propiedad de Loterías y Apuestas del Estado.<br>\
Nota: La finalidad de este ejercicio es puramente académica, juega responsablemente solo si eres mayor de edad. En ningún caso se pretende fomentar la ludopatía.<br>\
La aplicación solicitará al usuario, mediante una ventana emergente, un número del 1 al 8 correspondiente a una cantidad de combinaciones.<br>\
A continuación, se mostrará en la parte destinada para tal efecto, un boleto con el número de combinaciones, introducido por el usuario, generadas de forma aleatoria.<br>\
Cada combinación consta de 14 enfrentamientos entre dos equipos, donde hay tres opciones 1 X 2 (1 gana el equipo local, X empate y 2 gana el equipo visitante)<br>\
Cada boleto tiene una combinación extra donde se elige 0 1 2 M (representa el número de goles marcados por ese equipo, M 3 o más goles), correspondiente al Pleno al 15.</p>";
    document.getElementById("enunciadoAE").innerHTML = enunciado;
}
//Hacemos la funcion ver resolucion para ver el resultado del ejercicio
function verResolucion(){
    let nCombinaciones = pedirCombinaciones();
    alert(`El número de combinaciones es ${nCombinaciones}`);
    let resolucion = generarBoleto(nCombinaciones);
    document.getElementById("resolucionAE").innerHTML = generarTablaEnfrentamientos() + resolucion;
}

//Funcion para pedir el numero de combinaciones
function pedirCombinaciones(){
    let nCombinaciones = parseInt(prompt("Introduce un número de combinaciones (entre 1 y 8):"));
    if(isNaN(nCombinaciones) || nCombinaciones < 1 || nCombinaciones > 8){
        alert("Debes introducir un número entre 1 y 8.");
        return pedirCombinaciones();
    }
    return nCombinaciones;
}

// GeneraMOS la tabla de enfrentamientos
function generarTablaEnfrentamientos() {
    let tablaEnfrentamientos = "<div class='tablas'><table><tr><th>Enfrentamientos</th></tr>";
    
    // Generar 14 enfrentamientos numerados
    for (let i = 1; i <= 14; i++) {
        tablaEnfrentamientos += "<tr><td>Enfrentamiento " + i + "</td></tr>";
    }
    tablaEnfrentamientos += "<tr><td colspan='3' ></td></tr>";
    tablaEnfrentamientos += "<tr><td colspan='3' >Pleno al 15</td></tr>";
    tablaEnfrentamientos += "</table></div>";
    return tablaEnfrentamientos;
}

// Función para generar el boleto con las combinaciones
function generarBoleto(nCombinaciones) {
    let boleto = "";
    for (let i = 0; i < nCombinaciones; i++) {
        boleto += "<div class='tablas'><table><tr><th colspan='3'>Bloque " + (i + 1) + "</th></tr>";

        // Generar 14 enfrentamientos (cada uno con una opción aleatoria)
        for (let j = 0; j < 14; j++) {
            let opcion = opcionEnfrentamiento(); 
            boleto += "<tr>" + opcionSeñalada(opcion) + "</tr>";
        }

        boleto += "<tr><td colspan='3'></td></tr>";
        let opcionPleno = opcionEnfrentamientoPleno();
        boleto += "<tr>" + opcionSeñaladaPleno(opcionPleno) + "</tr>";

        boleto += "</table><br></div>";
    }
    return boleto;
}

function opcionEnfrentamiento() {
    let numeroOpcion = Math.floor(Math.random() * 3);
    let opcion = "";
    if (numeroOpcion == 0) {
        opcion = "1";
    } else if (numeroOpcion == 1) {
        opcion = "X";
    } else {
        opcion = "2";
    }
    return opcion;
}

function opcionEnfrentamientoPleno() {
    let numeroOpcion = Math.floor(Math.random() * 3);
    let opcion = "";
    if (numeroOpcion == 0) {
        opcion = "0";
    } else if (numeroOpcion == 1) {
        opcion = "1";
    } else if (numeroOpcion == 2) {
        opcion = "2";
    } else {
        opcion = "M";
    }
    return opcion;
}

function opcionSeñalada(opcion) {
    if (opcion === "1") {
        return `<td class="opcionSeñalada">${opcion}</td><td> X </td><td> 2 </td>`;
    } else if (opcion === "X") {
        return `<td> 1 </td><td class="opcionSeñalada">${opcion}</td><td> 2 </td>`;
    } else if (opcion === "2") {
        return `<td> 1 </td><td> X </td><td class="opcionSeñalada">${opcion}</td>`;
    }
}

// Función para marcar la opción señalada del Pleno al 15
function opcionSeñaladaPleno(opcion) {
    if (opcion === "1") {
        return `<td class="opcionSeñalada">${opcion}</td><td> 0 </td><td> 2 </td><td> M </td>`;
    } else if (opcion === "0") {
        return `<td class="opcionSeñalada">${opcion}</td><td> 1 </td><td> 2 </td><td> M </td>`;
    } else if (opcion === "2") {
        return `<td> 0 </td><td> 1 </td><td class="opcionSeñalada">${opcion}</td><td> M </td>`;
    } else {
        return `<td> 0 </td><td> 1 </td><td> 2 </td><td class="opcionSeñalada">${opcion}</td>`;
    }
}