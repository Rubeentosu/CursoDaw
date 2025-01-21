//Hacemos la funcion ver enunciado para ver el enunciado del ejercicio
function verEnunciado(){
    let enunciado = "<u>Ejercicio 3.</u> <p>Realiza una aplicación web dónde se solicite por pantalla,\
    mediante una ventana emergente, al usuario su sueldo (sin decimales) y los años de antigüedad.\
    La aplicación mostrará en la parte destinada para tal efecto, el sueldo resultante:<br> \
    Si el sueldo es inferior a 500 y su antigüedad es igual o superior a 10 años, triplicar el sueldo.<br>\
    Si el sueldo es inferior a 500, pero su antigüedad es menor a 10 años, doblar sueldo.<br>\
    Si el sueldo es mayor o igual a 500, mostrar sin cambios.</p>"
    document.getElementById("enunciadoAE").innerHTML = enunciado;
}

//Hacemos la funcion ver resolucion para ver el resultado del ejercicio
function verResolucion(){
    let resolucion;
    window.alert("Introduce tu sueldo(sin decimales) y años de antiguedad");
    //introduce el suelso y la antiguedad
    let sueldo = parseInt(prompt("Sueldo"))
    let antiguedad = prompt("antiguedad");
    //hacemos el switch
    switch(true){
        case sueldo < 500 && antiguedad >= 10:
        resolucion = sueldo*3;
        break;
        case sueldo < 500 && antiguedad < 10:
        resolucion = sueldo*2;
        break;
    default:
        resolucion = sueldo;
        }

    document.getElementById("resolucionAE").innerHTML = resolucion;
}