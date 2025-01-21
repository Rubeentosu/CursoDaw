//------------------PRIMITIVA------------------//
// Función principal para ver la resolución de la Primitiva
function verResolucionPrimitiva() {
    let nCombinaciones = pedirCombinaciones(); 
    let resolucion = generarBoletoPrimitiva(nCombinaciones);
    document.getElementById("resolucionPrimitiva").innerHTML = resolucion;
}

// Pedir número de combinaciones
function pedirCombinaciones() {
    let nCombinaciones;
    let esValido = false;
    
    while (!esValido) {
        nCombinaciones = parseInt(prompt("Introduce un número de combinaciones (entre 1 y 8):"));
        if (!isNaN(nCombinaciones) && nCombinaciones >= 1 && nCombinaciones <= 8) {
            esValido = true;
        } else {
            alert("Debes introducir un número entre 1 y 8.");
        }
    }
    
    return nCombinaciones;
}


let combinacionesGeneradasPrimitiva = [];

// Generar boleto para La Primitiva
function generarBoletoPrimitiva(nCombinaciones) {
    let boleto = "<div class='boleto'>";
    combinacionesGeneradasPrimitiva = [];
    let reintegro = Math.floor(Math.random() * 10); // Generar reintegro 

    for (let i = 0; i < nCombinaciones; i++) {
        let combinacion = generarNumerosCombinacion();

        combinacionesGeneradasPrimitiva.push({ numeros: combinacion, reintegro });

        boleto += `<div class='combinacion'>
            <div class='combinacion-numero'>Combinación ${i + 1}: `;

        for (let j = 0; j < combinacion.length; j++) {
            boleto += `<span class="circulos">${combinacion[j]}</span> `;
        }
}
        boleto += `</div>
            <div class='reintegro'>Reintegro: <span class="circulos">${reintegro}</span></div>
        </div><br>`;
    

    boleto += "</div>";
    return boleto;
}

//Genera los números de la combinación de forma aleatoria
function generarNumerosCombinacion() {
    let numeros = [];
    while (numeros.length < 6) {
        let numero = Math.floor(Math.random() * 49) + 1;
        if (!numeros.includes(numero)) {
            numeros.push(numero);
        }
    }
    return numeros;
}

//Genera la combinación ganadora de forma manual
function generarCombinacionGanadoraManualPrimitiva() {
    let numerosGanadores = [];
    while (numerosGanadores.length < 6) {
        let numero = parseInt(prompt("Introduce un número del 1 al 49:"));
        if (!isNaN(numero) && numero >= 1 && numero <= 49 && !numerosGanadores.includes(numero)) {
            numerosGanadores.push(numero);
        } else {
            alert("Número inválido o repetido. Inténtalo de nuevo.");
        }
    }
    return numerosGanadores;
}

//Genera el reintegro de forma manual
function generarReintegroManualPrimitiva() {
    let reintegro;
    do {
        reintegro = parseInt(prompt("Introduce un número para el reintegro (0 al 9):"));
        if (isNaN(reintegro) || reintegro < 0 || reintegro > 9) {
            alert("Debes introducir un número válido entre 0 y 9.");
        }
    } while (isNaN(reintegro) || reintegro < 0 || reintegro > 9);
    return reintegro;
}

function verResolucionComprobarPrimitivaManual() {
    let resolucion = comprobarPrimitivaManual();
    document.getElementById("resolucionPrimitivaManual").innerHTML = resolucion;
}

//Compruba la primitiva con la generada manualmente
function comprobarPrimitivaManual() {
    
    let combinacionGanadora = generarCombinacionGanadoraManualPrimitiva();
    let reintegroGanador = generarReintegroManualPrimitiva();

    let resultados = compararCombinacionesPrimitiva(combinacionGanadora, reintegroGanador, combinacionesGeneradasPrimitiva);
    let resolucion = "<div class='tablaSolucion'><table><tr><th>Combinación ganadora</th><th>Reintegro</th><th>Combinacio Usuario </th><th>Aciertos</th><th>Premio</th></tr>";

    for (let i = 0; i < resultados.length; i++) {
        let aciertos = resultados[i].aciertos;
        let reintegroAcertado = resultados[i].reintegroAcertado;
        let premio = calcularPremioPrimitiva(aciertos, reintegroAcertado);
        if (reintegroAcertado) {
            aciertos = aciertos + 1;
        }
        resolucion += `<tr>
            <td>${combinacionGanadora}</td>
            <td>${reintegroGanador}</td>
            <td> Combinacion ${i}</td>
            <td>${aciertos}</td>
            <td>${premio} €</td>
        </tr>`;
    }

    resolucion += "</table></div>";
    return resolucion;
}

//compara las combinaciones generadas con la ganadora
function compararCombinacionesPrimitiva(combinacionGanadora, reintegroGanador, combinacionesGeneradasPrimitiva) {
    let resultados = [];
    for (let i = 0; i < combinacionesGeneradasPrimitiva.length; i++) {
        let combinacion = combinacionesGeneradasPrimitiva[i].numeros;
        let reintegro = combinacionesGeneradasPrimitiva[i].reintegro;

        let aciertos = contarAciertos(combinacionGanadora, combinacion);
        let reintegroAcertado = reintegroGanador == reintegro;

        resultados.push({ aciertos: aciertos, reintegroAcertado: reintegroAcertado });
    }
    return resultados;
}

//Cuenta los aciertos
function contarAciertos(combinacionGanadora, combinacion) {
    let aciertos = 0;
    for (let i = 0; i < combinacionGanadora.length; i++) {
        if (combinacion.includes(combinacionGanadora[i])) {
            aciertos++;
        }
    }
    return aciertos;
}

//cual es el premio
function calcularPremioPrimitiva(numAciertos, reintegroAcertado) {
    let premio = 0;

    if (numAciertos === 6 && reintegroAcertado) {
        premio = 139838160;
    } else if (numAciertos === 6) {
        premio = 13983816;
    }else if (numAciertos === 5) {
        premio = 2330636;
    } else if (numAciertos === 4) {
        premio = 55491;
    } else if (numAciertos === 3) {
        premio = 1032;
    }else if (reintegroAcertado) {
        premio = 57;
    }

    return premio;
}


function verResolucionComprobarPrimitiva() {
    let resolucion = comprobarPrimitivaAutomatica();
    document.getElementById("resolucionPrimitivaAutomatica").innerHTML = resolucion;
}

//Comprueba la primitiva de forma automatica
function comprobarPrimitivaAutomatica() {
    let combinacionGanadora = generarCombinacionAutomaticaPrimitiva();
    let reintegroGanador = Math.floor(Math.random() * 10);

    let resultados = compararCombinacionesPrimitiva(combinacionGanadora, reintegroGanador, combinacionesGeneradasPrimitiva);
    
    let resolucion = "<div class='tablaSolucion'><table><tr><th>Combinación ganadora</th><th>Reintegro</th><th>Combinacio Usuario </th><th>Aciertos</th><th>Premio</th></tr>";
    for (let i = 0; i < resultados.length; i++) {
        let aciertos = resultados[i].aciertos;
        let reintegroAcertado = resultados[i].reintegroAcertado;
        if (reintegroAcertado) {
            aciertos = aciertos + 1;
        }
        let premio = calcularPremioPrimitiva(aciertos, reintegroAcertado);
        resolucion += `<tr>
            <td>${combinacionGanadora}</td>
            <td>${reintegroGanador}</td>
            <td> Combinacion ${i}</td>
            <td>${aciertos}</td>
            <td>${premio} €</td>
        </tr>`;
    }
    resolucion += "</table></div>";
    return resolucion;
}
//genera las combinaciones de forma automatica
function generarCombinacionAutomaticaPrimitiva() {
    let combinacionGanadora = [];
    while (combinacionGanadora.length < 6) {
        let numero = Math.floor(Math.random() * 49) + 1;
        if (!combinacionGanadora.includes(numero)) {
            combinacionGanadora.push(numero);
        }
    }
    return combinacionGanadora;
}

//-------------QUINIELA-------------//
//Mostrar el boleto de la quiniela
function verResolucionQuiniela() {
    let nCombinaciones = pedirCombinaciones(); 
    let resolucion = generarBoleto(nCombinaciones); 
    document.getElementById("resolucionQuiniela").innerHTML = generarTablaEnfrentamientos() + resolucion;
}

//Pedir numero de combinaciones
function pedirCombinaciones() {
    let nCombinaciones;
    let esValido = false;
    
    while (!esValido) {
        nCombinaciones = parseInt(prompt("Introduce un número de combinaciones (entre 1 y 8):"));
        if (!isNaN(nCombinaciones) && nCombinaciones >= 1 && nCombinaciones <= 8) {
            esValido = true;
        } else {
            alert("Debes introducir un número entre 1 y 8.");
        }
    }
    
    return nCombinaciones;
}


//Genera la tabla de enfrentamientos
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

//Esta varible guardará las combinaciones generadas
let combinacionesGeneradas = [];

//Gerar boleto de la quiniela
function generarBoleto(nCombinaciones) {
    let boleto = "";
    combinacionesGeneradas = [];  //Se reiniciara el array de combinaciones generadas acada vez que se genere un boleto

    //Crea las combinaciones
    for (let i = 0; i < nCombinaciones; i++) {
        boleto += "<div class='tablas'><table><tr><th colspan='3'>Bloque " + (i + 1) + "</th></tr>";
        let combinacion = [];

        // Generar los 14 primeros enfrentamientos
        for (let j = 0; j < 14; j++) {
            let opcion = opcionEnfrentamiento(); 
            combinacion.push(opcion);
            boleto += "<tr>" + opcionSeñalada(opcion) + "</tr>";
        }

        boleto += "<tr><td colspan='3'></td></tr>";

        //Generar el Pleno al 15
        let opcionPleno = opcionEnfrentamientoPleno();
        combinacion.push(opcionPleno);
        boleto += "<tr>" + opcionSeñaladaPleno(opcionPleno) + "</tr>";

        //Vamos guardando las combianciones generadas
        combinacionesGeneradas.push(combinacion);

        boleto += "</table><br></div>";
    }

    return boleto;
}

//Genera los enfrentamientos de forma aleatoria
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

//Genera el pleno al 15 de forma aleatoria
function opcionEnfrentamientoPleno() {
    let numeroOpcion = Math.floor(Math.random() * 4);
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

//Marca la opción seleccionada de la combinación
function opcionSeñalada(opcion) {
    if (opcion === "1") {
        return `<td class="opcionSeñalada">${opcion}</td><td> X </td><td> 2 </td>`;
    } else if (opcion === "X") {
        return `<td> 1 </td><td class="opcionSeñalada">${opcion}</td><td> 2 </td>`;
    } else if (opcion === "2") {
        return `<td> 1 </td><td> X </td><td class="opcionSeñalada">${opcion}</td>`;
    }
}

//Marca la opción seleccionada del pleno al 15
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

//Funcion que mostrar el resultado de la comprobación manual de la quiniela
function verResolucionComprobarQuinielaManual() {
    let resolucion = comprobarQuinielaManual();
    document.getElementById("resolucionQuinielaManual").innerHTML = resolucion;
}

//Esta funcion comprobara la quiniela manualmente
function comprobarQuinielaManual() {
    let combinacionGanadora = [];
    for (let i = 0; i < 14; i++) { 
        let opcion = pedirOpcion(i);
        combinacionGanadora.push(opcion);
    }
    let plenoAl15 = pedirOpcionPlenoAl15(); 
    combinacionGanadora.push(plenoAl15);

    // Comparar la combinación ganadora con las combinaciones generadas
    let resultados = compararCombinaciones(combinacionGanadora, combinacionesGeneradas);
    let resolucion = "<div class='tablaSolucion'><table><tr><th>Combinación ganadora</th><th>Combinacio Usuario </th><th>Aciertos</th><th>Premio</th></tr>";
    
    for (let i = 0; i < resultados.length; i++) {
        let aciertos = resultados[i].aciertos;
        let premio = calcularPremio(aciertos, resultados[i].plenoAl15Acertado);
        resolucion += "<tr><td>" + combinacionGanadora + "</td><td> bloque " + [i+1] + "</td><td>" + aciertos + "</td><td>" + premio + "€</td></tr>";
    }
    resolucion += "</table></div>";
    return resolucion;
}

function compararCombinaciones(combinacionGanadora, combinacionesGeneradas) {
    let resultados = [];
    for (let i = 0; i < combinacionesGeneradas.length; i++) {
        let resultado = compararCombinacionesEnfrentamientos(combinacionGanadora, combinacionesGeneradas[i]);
        let plenoAl15Acertado = combinacionGanadora[14] === combinacionesGeneradas[i][14];
        resultados.push({ aciertos: resultado, plenoAl15Acertado: plenoAl15Acertado });
    }
    return resultados;
}

//Aqui compararemos los enfrentamientos excepto el pleno al 15
function compararCombinacionesEnfrentamientos(combinacionGanadora, combinacionGenerada) {
    let aciertos = 0;
    for (let i = 0; i < 14; i++) {
        if (combinacionGanadora[i] === combinacionGenerada[i]) {
            aciertos++; 
        }
    }
    return aciertos;
}

//Pide la opcion de cada enfrentamiento
function pedirOpcion(i) {
    let opcion;
    let esValido = false;
    
    while (!esValido) {
        opcion = prompt("Introduce la opción del enfrentamiento " + (i + 1) + " (1, X, 2):");
        if (opcion === "1" || opcion === "X" || opcion === "2") {
            esValido = true;
        } else {
            alert("Debes introducir 1, X o 2.");
        }
    }
    
    return opcion;
}


//Pide la opcion del pleno al 15
function pedirOpcionPlenoAl15() {
    let opcion;
    let esValido = false;
    
    while (!esValido) {
        opcion = prompt("Introduce la opción del Pleno al 15 (1, 0, 2, M):");
        if (opcion === "1" || opcion === "0" || opcion === "2" || opcion === "M") {
            esValido = true;
        } else {
            alert("Debes introducir 1, 0, 2 o M.");
        }
    }
    
    return opcion;
}


//Asignacion del premio segun el resultado
function calcularPremio(numAciertos, plenoAl15Acertado) {
    let premio = 0;

    // Si se acertaron al menos 14 enfrentamientos y el Pleno al 15, premio completo
    if (numAciertos === 14 && plenoAl15Acertado) {
        premio = 76527504; // Premio para el Pleno al 15
    } else {
        // Premios en función de los aciertos
        if (numAciertos === 14) {
            premio = 4782969;
        } else if (numAciertos === 13) {
            premio = 170820;
        } else if (numAciertos === 12) {
            premio = 13140; 
        } else if (numAciertos === 11) {
            premio = 1643;
        } else if (numAciertos === 10) {
            premio = 299; 
        }
    }

    return premio; // Retorna el premio calculado
}

//Funcion que mostrar el resultado de la comprobación automática de la quiniela
function verResolucionComprobarQuiniela() {
    let resolucion = comprobarQuinielaAutomatica();
    document.getElementById("resolucionQuinielaAutomatica").innerHTML = resolucion;
}
// Comprobar quiniela automáticamente
function comprobarQuinielaAutomatica() {
    let combinacionGanadora = generarCombinacionAutomatica(); 
    let resultados = compararCombinaciones(combinacionGanadora, combinacionesGeneradas);

    let resolucion = "<div class='tablaSolucion'><table><tr><th>Combinación ganadora</th><th>Combinacio Usuario </th><th>Aciertos</th><th>Premio</th></tr>";
    for (let i = 0; i < resultados.length; i++) {
        let aciertos = resultados[i].aciertos;
        let premio = calcularPremio(aciertos, resultados[i].plenoAl15Acertado);
        resolucion += "<tr><td>" + combinacionGanadora + "</td><td> bloque " + [i+1] + "</td><td>" + aciertos + "</td><td>" + premio + "€</td></tr>";
    }
    resolucion += "</table></div>";
    return resolucion;
}



// Genera una combinación ganadora automática para comprobar
function generarCombinacionAutomatica() {
    let combinacionGanadora = [];
    // Genera 14 enfrentamientos aleatorios
    for (let i = 0; i < 14; i++) {
        let opcion = opcionEnfrentamiento(); 
        combinacionGanadora.push(opcion);
    }
    // Genera el Pleno al 15 aleatorio
    let plenoAl15 = opcionEnfrentamientoPleno();
    combinacionGanadora.push(plenoAl15);

    return combinacionGanadora;
}