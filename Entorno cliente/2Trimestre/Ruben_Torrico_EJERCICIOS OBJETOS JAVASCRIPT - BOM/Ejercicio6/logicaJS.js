function verEnunciado() {
    let enunciado = `<u>Ejercicio 6.</u> 
    <p>OBJETO DOCUMENT. Implementa una aplicación web con las siguientes características:<br>
HTML<br>
Un texto en un párrafo “Este es el texto de pruebas”<br>
Un botón <Cambiar estilo><br>
CSS<br>
Utiliza el selector p para que el texto se muestre de color rojo y con un tamaño de 19 px.<br>
JavaScript<br>
Accede a ese fichero externo mediante el botón anteriormente descrito y cambia los estilos para que el texto se muestre de color azul y con un tamaño de 25 px.<br>
Recarga la página y comprueba si hay persistencia en los cambios.<br>
Nota: Investiga y utiliza los métodos y objetos asociados a document.stylesheets.</p>`;
    document.getElementById("enunciadoAE").innerHTML = enunciado;
}

function cambiarEstilo() {
    let hojaEstilos = document.styleSheets[0]; // Accede a la primera hoja de estilos
    let reglas = hojaEstilos.cssRules || hojaEstilos.rules; // Obtiene las reglas CSS

    // Busca la regla CSS que afecta al <p> y la modifica
    for (let i = 0; i < reglas.length; i++) {
        if (reglas[i].selectorText === "p") { // Encuentra el selector <p>
            reglas[i].style.color = "blue"; // Cambia el color a azul
            reglas[i].style.fontSize = "25px"; // Cambia el tamaño a 25px
        }
    }
}
  
  

