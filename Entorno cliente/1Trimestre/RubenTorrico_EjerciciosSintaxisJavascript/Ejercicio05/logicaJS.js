//Hacemos la funcion ver enunciado para ver el enunciado del ejercicio
function verEnunciado(){
    let enunciado = "<u>Ejercicio 5.</u> <p>Realiza una aplicación web dónde se solicite por pantalla, \
    mediante una ventana emergente, al usuario el número de horas trabajadas y el precio por hora.\
    La aplicación mostrará en la parte destinada para tal efecto, el salario neto semanal de un trabajador en \
    función del número de horas trabajadas y la tasa de impuestos de acuerdo a las siguientes reglas: <br>\
    Las primeras 35 horas se pagan a tarifa normal.<br>\
    Las horas que pasen de 35 se pagan a 1.5 veces la tarifa normal.<br>\
    Al sueldo bruto se le aplicarán las siguientes tasas de impuestos:<br>\
    Los primeros 500 euros son libres de impuestos.<br>\
    Los siguientes 400 tienen un 25% de impuestos \
    Los restantes un 45% de impuestos.</p>"
    document.getElementById("enunciadoAE").innerHTML = enunciado;
}

//Hacemos la funcion ver resolucion para ver el resultado del ejercicio
function verResolucion(){
    let resolucion=0;
    window.alert("Vamos a calcular tu saldo");
    //pedimos las horas y el sueldo por hora
    var horas = prompt("Horas");
    var sueldoHora= prompt("Precio por hora");
    //si las horas superan las 35
    if(horas >35){
        //saco las horas restantes a 35 que se pagan normal
        horasDeMas = horas - 35;
        //saco el sueldo final teniendo en cuenta que las horas a partir de 35 se pagan mas caras
        resolucion = (35 * sueldoHora) + ((sueldoHora*1.5)*horasDeMas);
        //si no se cumple se queda el sueldo normal
    } else resolucion = horas * sueldoHora;
   
    
    if (resolucion <= 500) {
        // No se aplican impuestos para los primeros 500 euros
        impuestos = 0;
    } else if (resolucion > 500 && resolucion <= 900) {
        // Se aplican impuestos del 25% a la cantidad entre 500 y 900
        impuestos = (resolucion - 500) * 0.25;
    } else if (resolucion > 900) {
        // Se aplican impuestos del 25% a los primeros 400 euros después de 500
        var impuestos1 = (900 - 500) * 0.25;
        // Se aplican impuestos del 45% al monto que excede los 900 euros
        var impuestos2 = (resolucion - 900) * 0.45;
        impuestos = impuestos1 + impuestos2;
    }

    // Calculamos el salario restando los impuestos
    resolucion = resolucion - impuestos;

    document.getElementById("resolucionAE").innerHTML = resolucion;
    
}