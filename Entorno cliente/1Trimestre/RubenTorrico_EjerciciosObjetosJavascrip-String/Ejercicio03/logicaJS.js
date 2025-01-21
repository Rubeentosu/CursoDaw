//Hacemos la funcion ver enunciado para ver el enunciado del ejercicio
function verEnunciado(){
    let enunciado = "<u>Ejercicio 3.</u> <p> Realiza una aplicación web dónde se solicite por pantalla,\
    mediante una ventana emergente, al usuario una frase.<br>\
    Crea una función que reciba como argumento esa frase y devuelva el número de espacios, dígitos y\
    letras  contenidos en la frase. Puedes usar expresiones regulares.</p>";
    document.getElementById("enunciadoAE").innerHTML = enunciado;
}

//Hacemos la funcion ver resolucion para ver el resultado del ejercicio
function verResolucion(){
    let resolucion="";
    let cadena = prompt("Introduce una cadena:" )
    resolucion = contarContenido(cadena);
    document.getElementById("resolucionAE").innerHTML = resolucion;
}
function contarContenido(cadena){
    let patronLetras = /[A-Za-z]/;
    let patronEspacios = /[ ]/;
    let patronNumeros = /\d/;
    let contadorLetras =0, contadorEspacios = 0, contadorNumeros = 0;
    for(i=0; i<cadena.length; i++){
        if(patronLetras.test(cadena.charAt(i))){
            contadorLetras++;
        }else if(patronEspacios.test(cadena.charAt(i))){
            contadorEspacios++;
        }else if(patronNumeros.test(cadena.charAt(i))){
            contadorNumeros++;
        }
    }
    return `La cadena contiene ${contadorNumeros} digitos, ${contadorEspacios} espacios y ${contadorLetras} letras.`

}