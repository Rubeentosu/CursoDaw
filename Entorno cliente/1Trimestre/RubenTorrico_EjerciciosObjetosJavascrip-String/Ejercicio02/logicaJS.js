//Hacemos la funcion ver enunciado para ver el enunciado del ejercicio
function verEnunciado(){
    let enunciado = "<u>Ejercicio 2.</u> <p>Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana\
    emergente, al usuario una frase con letras y números.<br>\
 Crea una función que reciba como argumento esa frase y devuelva la suma de todos los dígitos contenidos en la frase.</p>"
    document.getElementById("enunciadoAE").innerHTML = enunciado;
}

//Hacemos la funcion ver resolucion para ver el resultado del ejercicio
function verResolucion(){
    let resolucion="";
    let cadena = prompt("Introduce una cadena:" )
    resolucion = sumarNumeros(cadena);
    document.getElementById("resolucionAE").innerHTML = resolucion;
}
function sumarNumeros(cadena){
    let patron = /\d/;
    let suma = 0;
    for(i=0;i < cadena.length; i++){
        if(patron.test(cadena.charAt(i))){
            suma =suma + parseInt(cadena.charAt(i));
        }
    }
    return `La suma es ${suma}`;
}