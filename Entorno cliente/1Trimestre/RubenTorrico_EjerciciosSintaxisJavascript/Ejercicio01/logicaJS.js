//Hacemos la funcion ver enunciado para ver el enunciado del ejercicio
function verEnunciado(){
    let enunciado = "<u>Ejercicio 1.</u> <p>Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente,\
    al usuario tres números. Si al menos uno de los valores ingresados es mayor a 10, mostrar en la parte destinada \
    para tal efecto de la aplicación web \"ALGUNO MAYOR QUE 10\". En caso contrario mostrar \"NINGUNO MAYOR QUE 10\". \
    (La doble comilla ha de aparecer también).</p>"
    document.getElementById("enunciadoAE").innerHTML = enunciado;
}

//Hacemos la funcion ver resolucion para ver el resultado del ejercicio
function verResolucion(){
    //Inicializo la varaible que contendra la resolucion la cual podra cambiar después
    let resolucion = "\"Ninguno mayor que 10\"";

    //Alerta que advierte que tienes que introducir 3 numeros
    window.alert("Tienes que introducir 3 numeros")

    //Inicializo las variables y pido el numero
    var numero1 = prompt("Introduce un numero");
    var numero2 = prompt("Introduce un numero");
    var numero3 = prompt("Introduce un numero");

    //Hago el if que mira si es alguno mayor que 10
    if(numero1 > 10 || numero2 > 10  || numero3 > 10){
        //cambia el valor de la variable que puse anteriormente
        resolucion = "\"Alguno mayor que 10\"";
    }
    //Si no se cumple el if la variable "resolucion" no cambia
    
    document.getElementById("resolucionAE").innerHTML = resolucion;
}