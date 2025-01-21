//Hacemos la funcion ver enunciado para ver el enunciado del ejercicio
function verEnunciado(){
    let enunciado = "<u>Ejercicio 1.</u> <p>Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana\
    emergente, al usuario una cadena de caracteres.<br>\
    Crea una función que reciba como argumento esa cadena de caracteres y\
    devuelva una cadena con todas las vocales y el número de veces que aparece cada una en la cadena argumento. </p>";
    document.getElementById("enunciadoAE").innerHTML = enunciado;
}

function verResolucion() {
    let fecha1 = prompt("Introduce la fecha en formato DD/MM/YYYY");
    let resolucion = nSemana(fecha1);
    document.getElementById("resolucionAE").innerHTML = resolucion;
}

function nSemana(fecha1) {
    let partes = fecha1.split("/");

    let dia = parseInt(partes[0]);
    let mes = parseInt(partes[1]) - 1;
    let anio = parseInt(partes[2]);

    let fecha = new Date(anio, mes, dia);

    // Validar que la fecha introducida sea válida
    if (fecha.getDate() !== dia || fecha.getMonth() !== mes || fecha.getFullYear() !== anio) {
        return "La fecha introducida no es válida.";
    }

    // Calcular la semana usando la función interna
    let semana = getWeek(fecha);
    let solucion = `La fecha ${fecha1} corresponde a la semana ${semana} del año ${anio}.`;

   
    if (dia === 1 && mes === 0 && (fecha.getDay() == 5 || fecha.getDay() == 6 || fecha.getDay() == 0)) {
        solucion = `La fecha ${fecha1} corresponde a la semana ${semana} del año anterior (${anio - 1}).`;
    }

    
    if (dia === 1 && mes === 0 && (fecha.getDay() == 1 || fecha.getDay() == 2 || fecha.getDay() == 3 || fecha.getDay() == 4)) {
        solucion = `La fecha ${fecha1} corresponde a la semana 1 del año ${anio}.`;
    }

    
    if (dia === 31 && mes === 11 && (fecha.getDay() == 1 || fecha.getDay() == 2 || fecha.getDay() == 3 || fecha.getDay() == 4)) {
        solucion = `La fecha ${fecha1} corresponde a la semana 1 del año siguiente (${anio + 1}).`;
    }

    return solucion;
}

// Función para calcular la semana del año
function getWeek(fecha) {
    let fechaInicioAnio = new Date(fecha.getFullYear(), 0, 1); // Primer día del año
    let diaSemanaInicio = fechaInicioAnio.getDay();

    // Añadir el domingo al final de la semana
    if (diaSemanaInicio == 0) {
        diaSemanaInicio = 7;
    }


    // Mover el inicio del año al primer lunes
    let inicioSemana = fechaInicioAnio;
    if (diaSemanaInicio !== 1) {
        inicioSemana = new Date(fechaInicioAnio.setDate(fechaInicioAnio.getDate() + (8 - diaSemanaInicio)));
    }

    // Diferencia en días desde el inicio de la primera semana
    let diferenciaDias = Math.floor((fecha - inicioSemana) / (1000 * 60 * 60 * 24));

    // Calcular número de semana
    if (diferenciaDias >= 0) {
        return Math.ceil((diferenciaDias + 1) / 7);
    } else {
        return 52;
    }
}







