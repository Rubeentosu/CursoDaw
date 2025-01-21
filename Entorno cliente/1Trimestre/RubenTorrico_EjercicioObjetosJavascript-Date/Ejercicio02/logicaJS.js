//Hacemos la funcion ver enunciado para ver el enunciado del ejercicio
function verEnunciado(){
    let enunciado = "<u>Ejercicio 2.</u> <p> Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario dos fechas y horas en formato XXXX/YY/ZZ HH:MM:SS.<br>\
Donde<br>\
XXXX es el año YY, el mes y ZZ, el día.<br>\
HH son las horas en formato 24 horas, MM los minutos y SS, los segundos.<br>\
Crea una función que sea capaz de calcular el número de días y horas transcurridos entre esas dos fechas y horas dadas . El resultado debe ser un valor absoluto, es decir, es indiferente que el primer argumento sea una fecha anterior o posterior al segundo, el resultado será un número de días y horas sin signo.<br>\
Muestra en la parte destinada para tal efecto de la aplicación web la salida de la función anterior.</p>";
    document.getElementById("enunciadoAE").innerHTML = enunciado;
}

//Hacemos la funcion ver resolucion para ver el resultado del ejercicio
function verResolucion(){
    let fecha1 = prompt("Introduce la primera fecha y hora en formato XXXX/YY/ZZ HH:MM:SS:");
    let fecha2 = prompt("Introduce la segunda fecha y hora en formato XXXX/YY/ZZ HH:MM:SS:");
    let resolucion=diferenciaEntreFechas(fecha1, fecha2);
    document.getElementById("resolucionAE").innerHTML = resolucion;
}

 function diferenciaEntreFechas(fecha1, fecha2){
    //Convertimos las fechas a Date
    let fechaFormato1 = new Date(fecha1);
    let fechaFormato2 = new Date(fecha2);
    let solucion = "";

    //Validar el formato fecha y hora
    let validarfecha = /^(\d{4})\/(\d{2})\/(\d{2}) (\d{2}):(\d{2}):(\d{2})$/;

    if(!validarfecha.test(fecha1) || !validarfecha.test(fecha2)){
        solucion = "El formato de la fecha o la hora no es valido, debe ser YYYY-MM-DD HH:MM:SS";
    }else{//Calculamos la diferencia entre los años
        let diferenciaAnios = Math.abs(fechaFormato1.getFullYear() - fechaFormato2.getFullYear());
        //Calculamos la diferencia entre los meses
        let diferenciaMeses = Math.abs(fechaFormato1.getMonth() - fechaFormato2.getMonth());
        //Calculamos la diferencia entre los días
        let diferenciaDias = Math.abs(fechaFormato1.getDate() - fechaFormato2.getDate());
        //Calculamos la diferencia entre las horas
        let diferenciaHoras = Math.abs(fechaFormato1.getHours() - fechaFormato2.getHours());
        //Calculamos la diferencia entre los minutos
        let diferenciaMinutos = Math.abs(fechaFormato1.getMinutes() - fechaFormato2.getMinutes());
        //Calculamos la diferencia entre los segundos
        let diferenciaSegundos = Math.abs(fechaFormato1.getSeconds() - fechaFormato2.getSeconds());

        solucion = `${diferenciaAnios} años, ${diferenciaMeses} meses, ${diferenciaDias} días, ${diferenciaHoras} horas, ${diferenciaMinutos} minutos, ${diferenciaSegundos} segundos`;
    }
    return solucion
}