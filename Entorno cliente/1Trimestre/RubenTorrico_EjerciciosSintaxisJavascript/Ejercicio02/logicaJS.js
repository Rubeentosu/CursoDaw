//Hacemos la funcion ver enunciado para ver el enunciado del ejercicio
function verEnunciado(){
    let enunciado = "<u>Ejercicio 2.</u> <p>Realiza una aplicación web dónde se solicite por pantalla,\
    mediante una ventana emergente, al usuario un día y mes en formato numérico. La aplicación mostrará \
    en la parte destinada para tal efecto \"SI\" si es navidad (el 25 del 12) y \"NO\" en caso contrario.</p>"
    document.getElementById("enunciadoAE").innerHTML = enunciado;
}

//Hacemos la funcion ver resolucion para ver el resultado del ejercicio
function verResolucion(){
    //Inicializo la varaible que contendra la resolucion la cual podra cambiar después
    let resolucion = "NO";

    //Alerta que advierte que tienes que añadir una fecha
    window.alert("Escribe un dia y un mes en formato numérico");

    //Inicializo las variables y pido la fecha
    var dia = prompt("Introduce un dia");
    var mes = prompt("Introduce un mes");

    //If que mira si la fecha es navidad
    if(dia == 25 && mes == 12){
        //si se cumple cambia el valor de la variable
        resolucion = "SI";
    }
    //muestra el resultado
    document.getElementById("resolucionAE").innerHTML = resolucion;
}