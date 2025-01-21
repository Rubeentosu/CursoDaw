function verEnunciado() {
    let enunciado = `<u>Ejercicio 8.</u> 
    <p>Ejercicio 8. COMUNICACIÓN ENTRE VENTANAS. Modifica el ejercicio anterior para que aparezca una imagen y un botón bajo esta entre los botones <Siguiente nivel> y <Nivel Anterior>.
La imagen cambiará dependiendo del nivel en que nos encontremos:
Nivel 1, https://upload.wikimedia.org/wikipedia/commons/c/ca/Minesweeper_1.svg
Nivel 2, https://upload.wikimedia.org/wikipedia/commons/4/44/Minesweeper_2.svg
Nivel 3, https://upload.wikimedia.org/wikipedia/commons/0/08/Minesweeper_3.svg
Nivel 4, https://upload.wikimedia.org/wikipedia/commons/4/4f/Minesweeper_4.svg
Nivel 5, https://upload.wikimedia.org/wikipedia/commons/4/46/Minesweeper_5.svg
El botón contendrá el texto <Jugar al nivel N> siendo N el número de nivel donde nos encontremos y al ser pulsado abrirá una nueva ventana centrada en pantalla de tamaño (500 x 500 px) con la página web Buscaminas.html (en la imagen adjunta puede parecer que la ventana no esté centrada debido al recorte de la captura).
Nota: La ventana del navegador principal debe envíar el dato correspondiente al nivel mediante métodos del objeto window a la ventana secundaria.
Puedes usar la aplicación web creada en la AE2.3 JUEGO BUSCAMINAS en JS si definiste un tablero dinámico, genera un tablero acorde al nivel.
Nivel 1, tablero 3x3.
Nivel 2, tablero 4x4.
Nivel 3, tablero 5x5.
Nivel 4, tablero 6x6.
Nivel 5, tablero 7x7.
La página web Buscaminas.html implementa un encabezado de nivel 1 con el texto “Buscaminas”, un párrafo vacío y un botón que al ser pulsado cierra la ventana. Todos los elementos están centrados.
El texto del párrafo vacío será modificado con el texto “Nivel N” siendo N el nivel correspondiente a la página en que se accionó el botón jugar.</p>`;
    document.getElementById("enunciadoAE").innerHTML = enunciado;
}
let nivelActual = 1;
let maxNivel = 5;
let minNivel = 1;

function actualizarNivel(nivelActual) {
    document.getElementById("nivelActual").textContent = `Nivel ${nivelActual}`;
    document.getElementById("jugar").textContent = `Jugar al nivel ${nivelActual}`;

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
        cambiarImagen(nivelActual);
        history.back();
    }
}

function adelante() {
    if(nivelActual < maxNivel) {
        nivelActual++;
        actualizarNivel(nivelActual);
        cambiarImagen(nivelActual);
        history.forward();
    }
}

function jugarNivel() {
    window.open("juego.html", "Nueva Ventana", "width=500,height=500");
}


function cerrarVentana() {
    window.close();
}

function cambiarImagen(nivelActual){
    if(nivelActual == 1 ){
        let imagen = document.getElementById("imagen");
        imagen.src = "Minesweeper_1.svg";
    }else if(nivelActual == 2){
        let imagen = document.getElementById("imagen");
        imagen.src = "Minesweeper_2.svg";
    }else if(nivelActual == 3){
        let imagen = document.getElementById("imagen");
        imagen.src = "Minesweeper_3.svg";
    }else if(nivelActual == 4){
        let imagen = document.getElementById("imagen");
        imagen.src = "Minesweeper_4.svg";
    }else if(nivelActual == 5){
        let imagen = document.getElementById("imagen");
        imagen.src = "Minesweeper_5.svg";
    }
}
