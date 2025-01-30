/*
Funciones de los botones:
empezar() si el vídeo está pausado, comenzará a reproducirse y el texto del botón cambiará a ‖. Al volver a pulsar el botón, el vídeo se pausará y se cambiará de nuevo el texto a ▶.

reiniciar() si el vídeo está iniciado se reiniciará, es decir, comenzará a reproducirse de nuevo desde el inicio. El botón reproducir cambiará a ||.

atrasar() la reproducción del vídeo saltará 5 segundos hacia atrás.

adelantar() la reproducción del vídeo saltará 5 segundos hacia delante.

silenciar() el sonido del vídeo se desactivará y el texto del botón cambiará a «activar audio». Al volver a pulsar el botón se activará el sonido y se cambiará de nuevo el texto a «silenciar audio».

menos() se bajará el volumen del vídeo 0.1 puntos hasta llegar a 0.
Cuando llegue a 0, el botón se desactivará.

mas() se subirá el volumen del vídeo 0.1 puntos hasta llegar a 1.
Cuando llegue a 1, el botón se desactivará.
*/

const video = document.getElementById("IdVideo");
const botonReiniciar = document.getElementById("IdReiniciar");
const botonAtrasar = document.getElementById("IdAtrasar");
const botonEmpezar = document.getElementById("IdEmpezar");
const botonAdelantar = document.getElementById("IdAdelantar");
const botonSilenciar = document.getElementById("IdSilenciar");
const botonMenos = document.getElementById("IdMenos");
const botonMas = document.getElementById("IdMas");

// Funciones
function empezar() {
    if (video.paused) {
        video.play();
        botonEmpezar.textContent = "❚❚";
    } else {
        video.pause();
        botonEmpezar.textContent = "▶";
    }
}

function reiniciar() {
    video.currentTime = 0;
    video.pause();
    botonEmpezar.textContent = "▶";
}

function atrasar() {
    video.currentTime = video.currentTime - 5;
}

function adelantar() {
    video.currentTime = video.currentTime + 5;
}

function silenciar() {
    if (video.muted) {
        video.muted = false;
        botonSilenciar.textContent = "Silenciar audio";
    } else {
        video.muted = true;
        botonSilenciar.textContent = "Activar audio";
    }
}

function menos() {
    video.volume = video.volume - 0.1;
    if (video.volume == 0) {
        botonMenos.disabled = true;
    }
    botonMas.disabled = false;
}

function mas() {
    video.volume = video.volume + 0.1;
    if (video.volume == 1) {
        botonMas.disabled = true;
    }
    botonMenos.disabled = false;
}
