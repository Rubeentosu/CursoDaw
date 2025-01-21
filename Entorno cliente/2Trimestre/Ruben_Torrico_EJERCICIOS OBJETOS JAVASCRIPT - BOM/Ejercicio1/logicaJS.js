//Hacemos la funcion ver enunciado para ver el enunciado del ejercicio
function verEnunciado(){
    let enunciado = "<u>Ejercicio 1.</u> <p>OBJETO WINDOW. Implementa una página web que contenga un botón <Nueva ventana>.\
Al clicar sobre este, se generará una nueva ventana (pop-up) con una resolución 720p. (Haz uso de las propiedades y métodos del objeto window)\
Testear en los diversos navegadores: Mostrar el menú y su barra de herramientas.\
https://developer.mozilla.org/en-US/docs/Web/API/Window/open</p>"
    document.getElementById("enunciadoAE").innerHTML = enunciado;
}

function abrirVentana(){
    window.open("https://google.com", "Nueva Ventana", "width=1280,height=720");
}