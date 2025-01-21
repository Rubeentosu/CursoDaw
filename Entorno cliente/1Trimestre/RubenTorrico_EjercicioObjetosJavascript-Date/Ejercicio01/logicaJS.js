//Hacemos la funcion ver enunciado para ver el enunciado del ejercicio
function verEnunciado(){
    let enunciado = "<u>Ejercicio 1.</u> <p>Ejercicio 1. Realiza una aplicación web dónde se muestre en la parte destinada para tal efecto la siguiente cadena de caracteres en función de la hora y el día.<br>\
“Buenos días, que tenga un feliz <diaSemana>” : de 6 de la mañana a las 12 del mediodía.<br>\
“Buenas tardes, disfrute de su tarde del <diaSemana>” : de las 12 del mediodía hasta las 20h.<br>\
“Buenas noches, le deseamos lo mejor para el <diaSemana> próximo” : de las 20h hasta las 6 de la madrugada</p>";
    document.getElementById("enunciadoAE").innerHTML = enunciado;
}

//Hacemos la funcion ver resolucion para ver el resultado del ejercicio
function verResolucion(){
    let resolucion=establecerMensaje();
    document.getElementById("resolucionAE").innerHTML = resolucion;
}
function establecerMensaje(){
    let cadena="";
    let hora = new Date;
    let dia = new Date;

    let diaSemana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
    if(hora.getHours() >= 6 && hora.getHours() < 12){
        cadena = `Buenos dias, que tengas un feliz ${diaSemana[dia.getDay()]}`;
    }else if(hora.getHours() >= 12 && hora.getHours() < 20){
        cadena = `Buenas tardes, disfrute de su tarde del ${diaSemana[dia.getDay()]}`;
    }else{
        cadena = `Buenas noches, le deseamos lo mejor para el ${diaSemana[dia.getDay()]}`;
    }
    return cadena;
}