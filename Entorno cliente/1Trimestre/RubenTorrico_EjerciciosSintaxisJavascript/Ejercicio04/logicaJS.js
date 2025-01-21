//Hacemos la funcion ver enunciado para ver el enunciado del ejercicio
function verEnunciado(){
    let enunciado = "<u>Ejercicio 4.</u> <p>Realiza una aplicación web dónde se solicite por pantalla, mediante \
    una ventana emergente, al usuario una calificación numérica entre 0 y 10 (con decimales).\
    La aplicación mostrará en la parte destinada para tal efecto, su transformación en calificación alfabética según la \
    siguiente tabla.\
    De 0 a 3, Muy deficiente.<br>\
    De 3 a 5, Insuficiente.<br>\
    De 5 a 6, Bien.<br>\
    De 6 a 9, Notable.<br>\
    De 9 a 10, Sobresaliente. </p>"
    document.getElementById("enunciadoAE").innerHTML = enunciado;
}

//Hacemos la funcion ver resolucion para ver el resultado del ejercicio
function verResolucion(){
    let resolucion;
    window.alert("Introduce una nota con decimales")
    //introducimos el la nota
    var nota = parseFloat(prompt("Nota"))
    //hago el switch para la nota que se introduzca
    switch(true){
        case nota >= 0 && nota < 3:
            resolucion = "Muy deficiente";
            break;
        case nota > 2 && nota < 6:
            resolucion = "Insuficiente";
            break;
        case nota >5 && nota < 7:
            resolucion = "Bien";
            break;
        case nota >5 && nota < 9:
            resolucion = "Notable";
            break;
        case nota > 8 && nota < 11:
            resolucion = "Sobresaliente"
            break;
        default: resolucion = "Nota no valida"
    }
    document.getElementById("resolucionAE").innerHTML = resolucion;
}