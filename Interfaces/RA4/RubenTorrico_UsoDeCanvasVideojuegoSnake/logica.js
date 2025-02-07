let canvas=null, lienzo=null;

//Posición inicial del personaje (un cuadrado)
let x=50,y=50;
let lastPress=null; //Variable para guardar la tecla presionada
//En nuestro juego, usaremos las teclas izquierda, arriba, derecha y abajo, cuyos codigos de teclado para la propriedad KeyboardEvent: code son
const KEY_LEFT = "ArrowLeft";
const KEY_UP = "ArrowUp";
const KEY_RIGHT = "ArrowRight";
const KEY_DOWN = "ArrowDown";

function iniciar(){
    canvas=document.getElementById('lienzo');
    lienzo=canvas.getContext('2d'); //obtenemos el contexto de dibujo
    run();
}
function run(){
    //requestAnimationFrame(): informa al navegador de que quieres realizar una animación y solicita que el navegador programe el repintado de la ventana para el próximo ciclo de animación.
    requestAnimationFrame(run); //animación optimizada
    accionesJuego();
    pintarLienzo(lienzo);
}
function accionesJuego(){
    //Modificamos la dirección que tendrá nuestro player en función de la tecla presionada y no podra ser la antonima y despues no padras pulsar la antonima 
    if (lastPress === KEY_RIGHT) {
        x += 1; // Mover a la derecha
    } else if (lastPress === KEY_LEFT) {
        x -= 1; // Mover a la izquierda
    } else if (lastPress === KEY_UP) {
        y -= 1; // Mover hacia arriba
    } else if (lastPress === KEY_DOWN) {
        y += 1; // Mover hacia abajo
    }
  
    //limitamos el movimiento del jugador para que no se salga del lienzo
    if (x >= canvas.width) x = canvas.width;
    if (x < 0) x = 0;
    if (y >= canvas.height) y = canvas.height;
    if (y < 0) y = 0;
}
function pintarLienzo(lienzo){
    lienzo.fillStyle="#282c34"; //le ponemos un color al lienzo
    lienzo.fillRect(0,0,canvas.width,canvas.height); //Dibujamos el lienzo
    lienzo.fillStyle='#0f0';
    lienzo.fillRect(x,y,10,10); //Dibujamos el jugador: inicialmente en x,y y es de 10x10       
}

document.addEventListener('keydown', function(event) { 
    //Creamos un manejador de evento para el teclado que se encargue de almacenar la tecla presionada. El evento que nos interesa en este caso es keydown
    lastPress=event.code;
}, false);
window.addEventListener("load", iniciar, false);