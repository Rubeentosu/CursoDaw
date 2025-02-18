let canvas = null, lienzo = null;

//Posición inicial del personaje (cuadrado verde)
let x = 50, y = 50;
let lastPress = null;

//Posición inicial del cuadrado rojo
let comidaX = Math.floor(Math.random() * 400);
let comidaY = Math.floor(Math.random() * 400);

//Array para almacenar las posiciones donde el cuadrado rojo fue "comido"
let posicionesComidas = [];

//Array para almacenar las paredes (cuadrados azules)
let paredes = [];

//Guarada la puntuacion del jugador
let puntuacion = 0;

//Constantes de teclas
const KEY_LEFT = "ArrowLeft";
const KEY_UP = "ArrowUp";
const KEY_RIGHT = "ArrowRight";
const KEY_DOWN = "ArrowDown";

let numParedes=1;

function iniciar(){
    canvas = document.getElementById('lienzo');
    lienzo = canvas.getContext('2d'); //Obtenemos el contexto de dibujo
    run();
}

function run(){
    setTimeout(function() {
        requestAnimationFrame(run);
    accionesJuego();
    pintarLienzo(lienzo);
    }, 0); // Retardo de 100 ms

}

function accionesJuego(){
    // Modificamos la dirección del jugador en función de la tecla presionada
    if(lastPress === KEY_RIGHT && lastPress !== KEY_LEFT){
        x += 1; // Mover a la derecha
    } else if(lastPress === KEY_LEFT && lastPress !== KEY_RIGHT){
        x -= 1; // Mover a la izquierda
    } else if(lastPress === KEY_UP && lastPress !== KEY_DOWN){
        y -= 1; // Mover hacia arriba
    } else if(lastPress === KEY_DOWN && lastPress !== KEY_UP){
        y += 1; // Mover hacia abajo
    }

    // Si el jugador toca la pared, mostrar alerta y reiniciar posición
    if(x + 10 > canvas.width || x < 0 || y + 10 > canvas.height || y < 0){
        alert("¡Perdiste! Has tocado la pared.");
        reiniciarJuego();
    }

    // Verificar si el cuadrado verde ha "comido" al cuadrado rojo
    if(x < comidaX + 10 && x + 10 > comidaX && y < comidaY + 10 && y + 10 > comidaY){
        // Guardar la posición del cuadrado rojo en el array
        posicionesComidas.push([comidaX, comidaY]);

        // Reubicar el cuadrado rojo en una posición aleatoria
        comidaX = Math.floor(Math.random() * (canvas.width - 10));
        comidaY = Math.floor(Math.random() * (canvas.height - 10));
        
        agregarParedesAleatorias(numParedes);
        numParedes = numParedes + 1;

        //Aumentar la puntuación
        puntuacion = puntuacion + 1;
    }

    // Verificar si el cuadrado verde toca alguna pared
    for(let i = 0; i < paredes.length; i++){
        if(x < paredes[i][0] + 10 && x + 10 > paredes[i][0] && y < paredes[i][1] + 10 && y + 10 > paredes[i][1]){
            alert("¡Perdiste! Has tocado una pared.");
            reiniciarJuego();
        }
    }

    //Verifico que el jugador a ganado cuando el jugador ha ganado
    if(puntuacion == 10){
        alert("¡Has ganado!");
        reiniciarJuego();
    }
}

function reiniciarJuego(){
    //Reiniciar posición del jugador
    x = 50;
    y = 50;
    lastPress = null;

    //Reiniciar arrays
    posicionesComidas = [];
    paredes = [];
    numParedes=1;

    //Reinicio el contador
    puntuacion=0;

    //Reubicar el cuadrado rojo en una posición aleatoria
    comidaX = Math.floor(Math.random() * (canvas.width - 10));
    comidaY = Math.floor(Math.random() * (canvas.height - 10));

}

function pintarLienzo(lienzo){
    //Fondo del lienzo
    lienzo.fillStyle = "#282c34";
    lienzo.fillRect(0, 0, canvas.width, canvas.height);

    //Dibujar el cuadrado verde
    lienzo.fillStyle = '#0f0';
    lienzo.fillRect(x, y, 10, 10);

    //Dibujar el cuadrado rojo (manzana)
    lienzo.fillStyle = '#f00';
    lienzo.fillRect(comidaX, comidaY, 10, 10);

    //Dibujar las paredes (cuadrados azules)
    lienzo.fillStyle = '#00f';
    for(let i = 0; i < paredes.length; i++){
        lienzo.fillRect(paredes[i][0], paredes[i][1], 10, 10);
    }
}

function agregarParedesAleatorias(numParedes){
    for(let j = 0; j < numParedes; j++){
        let nuevaParedX, nuevaParedY;
        let posicionValida = false;

        //Buscar una posición válida para cada pared
        while(!posicionValida){
            nuevaParedX = Math.floor(Math.random() * (canvas.width - 10));
            nuevaParedY = Math.floor(Math.random() * (canvas.height - 10));

            posicionValida = true;

            //Comprobar que no coincida con la posición del cuadrado rojo
            if(nuevaParedX < comidaX + 10 && nuevaParedX + 10 > comidaX && nuevaParedY < comidaY + 10 && nuevaParedY + 10 > comidaY){
                posicionValida = false;
            }

            //Comprobar que no coincida con la posición del cuadrado verde
            if(nuevaParedX < x + 10 && nuevaParedX + 10 > x && nuevaParedY < y + 10 && nuevaParedY + 10 > y){
                posicionValida = false;
            }

            //Comprobar que no coincida con las demás paredes
            for(let i = 0; i < paredes.length; i++){
                if(nuevaParedX < paredes[i][0] + 10 && nuevaParedX + 10 > paredes[i][0] && nuevaParedY < paredes[i][1] + 10 && nuevaParedY + 10 > paredes[i][1]){
                    posicionValida = false;
                    break;
                }
            }
        }

        //Añadir la nueva pared al array
        paredes.push([nuevaParedX, nuevaParedY]);
    }
}

document.addEventListener('keydown', function (event){
    //Almacenar la tecla presionada
    lastPress = event.code;
}, false);

window.addEventListener("load", iniciar, false);
