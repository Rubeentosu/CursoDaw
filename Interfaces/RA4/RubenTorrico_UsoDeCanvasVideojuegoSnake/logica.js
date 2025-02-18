let canvas = null, lienzo = null;

// Posición inicial de la serpiente (array de valores)
let serpiente = [50, 50]; // Representa la cabeza de la serpiente en x = 50, y = 50
let lastPress = null;

// Posición inicial de la comida
let comidaX = Math.floor(Math.random() * 400);
let comidaY = Math.floor(Math.random() * 400);

// Paredes y puntuación
let paredes = [];
let puntuacion = 0;

// Teclas
const KEY_LEFT = "ArrowLeft";
const KEY_UP = "ArrowUp";
const KEY_RIGHT = "ArrowRight";
const KEY_DOWN = "ArrowDown";

// Dirección inicial
let direccion = '';

let numParedes = 1;

function iniciar() {
    canvas = document.getElementById('lienzo');
    lienzo = canvas.getContext('2d');
    run();
}

function run() {
    setTimeout(function () {
        requestAnimationFrame(run);
        accionesJuego();
        pintarLienzo();
    }, 100);
}

// Esta función se llama después de que la serpiente haya comido la comida
function accionesJuego() {
    let cabezaX = serpiente[0];
    let cabezaY = serpiente[1];

    // Mover la serpiente según la dirección actual
    if (direccion === 'RIGHT') cabezaX += 10;
    if (direccion === 'LEFT') cabezaX -= 10;
    if (direccion === 'UP') cabezaY -= 10;
    if (direccion === 'DOWN') cabezaY += 10;

    // Si la serpiente toca las paredes (sin rebote)
    if (cabezaX < 0 || cabezaX >= canvas.width || cabezaY < 0 || cabezaY >= canvas.height) {
        alert("¡Perdiste! Has tocado una pared.");
        reiniciarJuego();
        return;
    }

    // Verificar si la cabeza de la serpiente toca alguna parte de su cuerpo
    for (let i = 2; i < serpiente.length; i += 2) { // Comienza en el segundo segmento
        if (serpiente[i] === cabezaX && serpiente[i + 1] === cabezaY) {
            alert("¡Perdiste! Has chocado contigo misma.");
            reiniciarJuego();
            return;
        }
    }

    // Si come la comida
    if (cabezaX < comidaX + 10 && cabezaX + 10 > comidaX && cabezaY < comidaY + 10 && cabezaY + 10 > comidaY) {
        // Agregar nueva parte en la dirección opuesta al movimiento
        let colaX = serpiente[serpiente.length - 2];
        let colaY = serpiente[serpiente.length - 1];
        let nuevaParteX = colaX;
        let nuevaParteY = colaY;

        if (lastPress === KEY_RIGHT) nuevaParteX -= 10;
        if (lastPress === KEY_LEFT) nuevaParteX += 10;
        if (lastPress === KEY_UP) nuevaParteY += 10;
        if (lastPress === KEY_DOWN) nuevaParteY -= 10;

        serpiente.push(nuevaParteX, nuevaParteY); // Agregar nueva parte

        // Reubicar la comida
        comidaX = Math.floor(Math.random() * (canvas.width - 10));
        comidaY = Math.floor(Math.random() * (canvas.height - 10));

        // Aumentar la dificultad y agregar paredes aleatorias
        agregarParedesAleatorias(1); // Solo se agrega una pared por comida
        numParedes++; // Solo incrementamos el contador de paredes en 1

        // Aumentar puntuación
        puntuacion++;
    }

    // Verificar colisión con las paredes
    for (let i = 0; i < paredes.length; i++) {
        if (cabezaX < paredes[i][0] + 10 && cabezaX + 10 > paredes[i][0] && cabezaY < paredes[i][1] + 10 && cabezaY + 10 > paredes[i][1]) {
            alert("¡Perdiste! Has tocado una pared.");
            reiniciarJuego();
            return;
        }
    }

    // Agregar la nueva cabeza
    serpiente.unshift(cabezaX, cabezaY);

    // Si no ha comido, eliminar la última parte de la serpiente
    if (serpiente.length > 2) {
        serpiente.pop();
        serpiente.pop();
    }
}


// Asegúrate de que solo agregue una pared al comer la comida
function agregarParedesAleatorias(numParedes) {
    for (let j = 0; j < numParedes; j++) {
        let nuevaParedX, nuevaParedY;
        let posicionValida = false;

        while (!posicionValida) {
            nuevaParedX = Math.floor(Math.random() * (canvas.width - 10));
            nuevaParedY = Math.floor(Math.random() * (canvas.height - 10));

            posicionValida = true;

            // Verificar que la pared no esté en la misma posición que la comida
            if (nuevaParedX === comidaX && nuevaParedY === comidaY) {
                posicionValida = false;
                continue; // Si colisiona con la comida, generar otra posición
            }

            // Verificar que la pared no esté en la misma posición que la serpiente
            for (let i = 0; i < serpiente.length; i += 2) {
                if (serpiente[i] === nuevaParedX && serpiente[i + 1] === nuevaParedY) {
                    posicionValida = false;
                    break;  // Si colisiona con la serpiente, generar otra posición
                }
            }

            // Verificar que la pared no esté en la misma posición que otras paredes
            for (let i = 0; i < paredes.length; i++) {
                if (paredes[i][0] === nuevaParedX && paredes[i][1] === nuevaParedY) {
                    posicionValida = false;
                    break;  // Si colisiona con otra pared, generar otra posición
                }
            }
        }

        paredes.push([nuevaParedX, nuevaParedY]);
    }
}



function reiniciarJuego() {
    serpiente = [50, 50]; // Volver a la posición inicial
    lastPress = null;
    puntuacion = 0;
    paredes = [];
    numParedes = 1;
    comidaX = Math.floor(Math.random() * (canvas.width - 10));
    comidaY = Math.floor(Math.random() * (canvas.height - 10));
    direccion = '';
}

function pintarLienzo() {
    lienzo.fillStyle = "#282c34";
    lienzo.fillRect(0, 0, canvas.width, canvas.height);

    // Dibujar la serpiente
    lienzo.fillStyle = "#0f0";
    for (let i = 0; i < serpiente.length; i += 2) {
        lienzo.fillRect(serpiente[i], serpiente[i + 1], 10, 10);
    }

    // Dibujar la comida
    lienzo.fillStyle = "#f00";
    lienzo.fillRect(comidaX, comidaY, 10, 10);

    // Dibujar las paredes
    lienzo.fillStyle = "#00f";
    for (let i = 0; i < paredes.length; i++) {
        lienzo.fillRect(paredes[i][0], paredes[i][1], 10, 10);
    }

}

// Asegurarse de que la dirección no sea opuesta
document.addEventListener('keydown', function (event) {
    if (event.code === KEY_RIGHT && direccion !== 'LEFT') {
        direccion = 'RIGHT';
    }
    if (event.code === KEY_LEFT && direccion !== 'RIGHT') {
        direccion = 'LEFT';
    }
    if (event.code === KEY_UP && direccion !== 'DOWN') {
        direccion = 'UP';
    }
    if (event.code === KEY_DOWN && direccion !== 'UP') {
        direccion = 'DOWN';
    }
}, false);

window.addEventListener("load", iniciar, false);
