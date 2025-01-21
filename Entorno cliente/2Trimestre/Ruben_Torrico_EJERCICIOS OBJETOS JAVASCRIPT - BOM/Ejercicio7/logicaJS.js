function verEnunciado() {
    let enunciado = `<u>Ejercicio 7.</u> 
    <p>Ejercicio 7. OBJETO HISTORY. Desarrolla una aplicación web que simule un menú de navegación entre niveles de un videojuego. (Haz uso de las propiedades y métodos del objeto history). Implementa las siguientes características:<br>
Incluye en un título centrado con una tipografía sin serifa el texto “Buscaminas: Navegador de niveles” con un margen de 50 px.<br>
Incluye debajo de este el texto “Nivel N” donde N hace referencia al nivel actual del juego. Este irá incrementando o decreciendo según se pulsen los botones descritos a continuación.<br>
El usuario podrá moverse entre los niveles utilizando botones para avanzar <Siguiente nivel> o retroceder <Nivel Anterior>.<br>
El nivel inicial es el 1 y el nivel máximo el 5.<br>
El botón <Nivel Anterior> estará deshabilitado en el nivel 1.<br>
El botón <Siguiente nivel> estará deshabilitado en el nivel 5.<br>
En ambos casos, el cursor del ratón cambiará como se describe en la figura adjunta al pasar por encima.<br>
Aplica estilos a los botones para mejorar su apariencia (puedes inspirarte en la figura adjunta, la línea negra es un elemento meramente decorativo de este documento con la función de orientar al estudiante en el diseño de la aplicación).</p>`;
    document.getElementById("enunciadoAE").innerHTML = enunciado;
}
let nivelActual = 1;
let maxNivel = 5;
let minNivel = 1;

function actualizarNivel(nivelActual) {
    document.getElementById("nivelActual").textContent = `Nivel ${nivelActual}`;

    if(nivelActual === minNivel) {
        document.getElementById("anterior").disabled = true;
    } else {
        document.getElementById("anterior").disabled = false;
    }

    if(nivelActual === maxNivel) {
        document.getElementById("siguiente").disabled = true;
    } else {
        document.getElementById("siguiente").disabled = false;
    }
}

function atras() {
    if(nivelActual > minNivel) {
        nivelActual--;
        actualizarNivel(nivelActual);
        history.back();
    }
}

function adelante() {
    if(nivelActual < maxNivel) {
        nivelActual++;
        actualizarNivel(nivelActual);
        history.forward();
    }
}




        

