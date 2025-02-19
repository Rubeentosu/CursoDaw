let canvas = null, lienzo = null;

//Posición inicial de la serpiente (array de valores)
let serpiente = [50, 50]; // Representa la cabeza de la serpiente en x = 50, y = 50
let lastPress = null;

//Posición inicial de la comida
let cuadradoRojoX = Math.floor(Math.random() * 600);
let cuadradoRojoY = Math.floor(Math.random() * 400);


//Paredes y puntuación
let paredes = [];
let puntuacion = 0;

//Teclas
const KEY_LEFT = "ArrowLeft";
const KEY_UP = "ArrowUp";
const KEY_RIGHT = "ArrowRight";
const KEY_DOWN = "ArrowDown";

//Dirección inicial
let direccion = '';

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
    }, 90);
}

//Esta función se llama después de que la serpiente haya comido un cuadrado rojo
function accionesJuego() {
    let cabezaX = serpiente[0];
    let cabezaY = serpiente[1];

    //Mover la serpiente según la dirección actual
    if (direccion === 'RIGHT') cabezaX += 10;
    if (direccion === 'LEFT') cabezaX -= 10;
    if (direccion === 'UP') cabezaY -= 10;
    if (direccion === 'DOWN') cabezaY += 10;

    // Si la serpiente toca las paredes
    if (cabezaX < 0 || cabezaX >= canvas.width || cabezaY < 0 || cabezaY >= canvas.height) {
        alert("¡Perdiste! Has tocado una pared.");
        reiniciarJuego();
        return;
    }

    // Verificar si la cabeza de la serpiente toca alguna parte de su cuerpo
    for (let i = 2; i < serpiente.length; i += 2) { // Comienza en el segundo segmento
        if (serpiente[i] === cabezaX && serpiente[i + 1] === cabezaY) { //Si la cabeza toca alguna parte de su cuerpo
            alert("¡Perdiste! Has chocado contigo misma.");
            reiniciarJuego();
            return;
        }
    }

    //Si llegas a 10 puntos, ganas
    if (puntuacion === 100) {
        alert("¡Felicidades! Has ganado.");
        reiniciarJuego();
        return;
    }


    //Si pasa por el cuadrado rojo se agrega una nueva parte a la serpiente
    if (cabezaX < cuadradoRojoX + 10 && cabezaX + 10 > cuadradoRojoX && cabezaY < cuadradoRojoY + 10 && cabezaY + 10 > cuadradoRojoY) {

        serpiente.push(cabezaX+10, cabezaY+10); // Agregar nueva parte

        // Reubicar la comida
        cuadradoRojoX = Math.floor(Math.random() * (canvas.width - 10));
        cuadradoRojoY = Math.floor(Math.random() * (canvas.height - 10));

        // Aumentar la dificultad y agregar paredes aleatorias
        agregarParedesAleatorias(1); // Solo se agrega una pared por comida

        // Aumentar puntuación en +10
        puntuacion += 10;
    }

    // Verificar colisión con las paredes
    for (let i = 0; i < paredes.length; i++) {
        if (cabezaX < paredes[i][0] + 10 && cabezaX + 10 > paredes[i][0] && cabezaY < paredes[i][1] + 10 && cabezaY + 10 > paredes[i][1]) {
            alert("¡Perdiste! Has tocado una pared.");
            reiniciarJuego();
            return;
        }
    }

    //Va guardando la posición de la serpiente
    serpiente.unshift(cabezaX, cabezaY);
    console.log(serpiente);

    //Si la serpiente es más larga que 2, eliminar la cola para que no lo haga de forma infinita
    if (serpiente.length > 2) {
        serpiente.splice(serpiente.length - 2, 2);
    }

    //Actualizar la puntuación
    document.getElementById('puntuacion').innerHTML = `Puntuacion ${puntuacion}`;
    
}

//Asegura de que solo agregue una pared al pasar por el cuadrado rojo
function agregarParedesAleatorias(numParedes) {
    for (let j = 0; j < numParedes; j++) {
        let nuevaParedX, nuevaParedY;
        let posicionValida = false;

        while (!posicionValida) {
            nuevaParedX = Math.floor(Math.random() * (canvas.width - 10));
            nuevaParedY = Math.floor(Math.random() * (canvas.height - 10));

            posicionValida = true;

            //Verificar que la pared no esté en la misma posición que la comida
            if (nuevaParedX === cuadradoRojoX && nuevaParedY === cuadradoRojoY) {
                posicionValida = false;
                continue; //Si colisiona con el cuadrado rojo, generar otra posición
            }

            //Verificar que la pared no esté en la misma posición que la serpiente
            for (let i = 0; i < serpiente.length; i += 2) {
                if (serpiente[i] === nuevaParedX && serpiente[i + 1] === nuevaParedY) {
                    posicionValida = false;
                    break;  //Si colisiona con la serpiente, generar otra posición
                }
            }

            //Verificar que la pared no esté en la misma posición que otras paredes
            for (let i = 0; i < paredes.length; i++) {
                if (paredes[i][0] === nuevaParedX && paredes[i][1] === nuevaParedY) {
                    posicionValida = false;
                    break;  //Si colisiona con otra pared, generar otra posición
                }
            }
        }

        paredes.push([nuevaParedX, nuevaParedY]);
        console.log(paredes);
    }
}


//Reinicimos el juego
function reiniciarJuego() {
    serpiente = [50, 50];
    lastPress = null;
    puntuacion = 0;
    paredes = [];
    cuadradoRojoX = Math.floor(Math.random() * (canvas.width - 10));
    cuadradoRojoY = Math.floor(Math.random() * (canvas.height - 10));
    direccion = '';
}

function pintarLienzo() {
    lienzo.fillStyle = "#282c34";
    lienzo.fillRect(0, 0, canvas.width, canvas.height);

    //Dibujar la serpiente
    lienzo.fillStyle = "#0f0";
    for (let i = 0; i < serpiente.length; i += 2) {
        lienzo.fillRect(serpiente[i], serpiente[i + 1], 10, 10);
    }

    //Dibujar la comida
    lienzo.fillStyle = "#f00";
    lienzo.fillRect(cuadradoRojoX, cuadradoRojoY, 10, 10);

    //Dibujar las paredes
    lienzo.fillStyle = "#00f";
    for (let i = 0; i < paredes.length; i++) {
        lienzo.fillRect(paredes[i][0], paredes[i][1], 10, 10);
    }

}

//Me aseguro de que la dirección no sea opuesta
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
