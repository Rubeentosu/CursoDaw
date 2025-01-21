//Hacemos la funcion ver enunciado para ver el enunciado del ejercicio
function verEnunciado(){
    let enunciado = "<p>Ver longitud del array  y rellenar array</p>"
    document.getElementById("enunciadoAE").innerHTML = enunciado;
}

let array = [];
function verResolucion() {
    elemento= prompt("Numero: ")
    array = rellenarArray(array,elemento);
    let longitud = obtenerLongitudArray(array);
    document.getElementById("resolucionAE").innerHTML = `El contenido del array es ${array} con longitud ${longitud}`;
}
function obtenerLongitudArray(array) {
    let contador = 0;
    for(let i = 0;array[i] !== undefined; i++){
        contador++;
    }
    return contador;
}
function rellenarArray(a,element){
    [obtenerLongitudArray(a)] = element;
    return a;
}
