//Variable para guardar la tecla presionada
let lastPress=null; 

class Segmento {
    constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
    }
    
    dibujar(context) {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.size, this.size);
    }
}

class Juego {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;
        this.velocidad = 10;
        this.direccion = 'right';
        this.segmentos = [new Segmento(0, 0, 10, 'green')];
        this.cuadradosRojos = [];
        this.cuadradosAzules = [];
        this.puntaje = 0;
        this.perdido = false;
    }

    //iniciarJuego(): Inicializa los eventos y comienza el bucle de actualización del juego.
    iniciarJuego() {
        this.generarCuadradosRojos(5);
        this.generarCuadradosAzules(1);
        document.addEventListener('keydown', (event) => {
            lastPress = event.key;
        });
        this.actualizar();
    }
    
    cambiarDireccion(event) {
        if (event === 'ArrowUp' && this.direccion !== 'down') {
            this.direccion = 'up';
        } else if (event === 'ArrowDown' && this.direccion !== 'up') {
            this.direccion = 'down';
        } else if (event === 'ArrowLeft' && this.direccion !== 'right') {
            this.direccion = 'left';
        } else if (event === 'ArrowRight' && this.direccion !== 'left') {
            this.direccion = 'right';
        }
    }

    actualizar() {
        this.moverCuadrado();
        this.verificarColisiones();
        this.dibujar();
        setTimeout(() => this.actualizar(), 1000 / this.velocidad);
    }

    moverCuadrado() {
        let cabeza = this.segmentos[0];
        let x = cabeza.x;
        let y = cabeza.y;
        if (this.direccion === 'up') {
            y -= cabeza.size;
        } else if (this.direccion === 'down') {
            y += cabeza.size;
        } else if (this.direccion === 'left') {
            x -= cabeza.size;
        } else if (this.direccion === 'right') {
            x += cabeza.size;
        }
        this.segmentos.unshift(new Segmento(x, y, cabeza.size, 'green'));
        if (this.puntaje > 0) {
            this.segmentos.pop();
        }
    }

    //verificarColisiones(): Comprueba las colisiones con los bordes, los cuadrados rojos, los cuadrados azules y con el objetivo de ganar.
    verificarColisiones() {
        let cabeza = this.segmentos[0];
        if (cabeza.x < 0 || cabeza.x >= this.canvas.width || cabeza.y < 0 || cabeza.y >= this.canvas.height) {
            this.perderJuego();
        }
        for (let i = 1; i < this.segmentos.length; i++) {
            if (cabeza.x === this.segmentos[i].x && cabeza.y === this.segmentos[i].y) {
                this.perderJuego();
            }
        }
        for (let cuadrado of this.cuadradosRojos) {
            if (cabeza.x === cuadrado.x && cabeza.y === cuadrado.y) {
                this.puntaje++;
                this.segmentos.push(new Segmento(cabeza.x, cabeza.y, cabeza.size, 'green'));
                this.cuadradosRojos = [];
                this.generarCuadradosRojos(this.puntaje + 5);
                this.generarCuadradosAzules(1);
            }
        }
        for (let cuadrado of this.cuadradosAzules) {
            if (cabeza.x === cuadrado.x && cabeza.y === cuadrado.y) {
                this.perderJuego();
            }
        }
    }

    //generarCoordenadaAleatoria(max): Genera una coordenada aleatoria para los objetos (cuadrados rojos y azules) dentro del lienzo.
    generarCoordenadaAleatoria(max) {
        return Math.floor(Math.random() * max) * 10;
    }

    //generarCuadradosAzules(n): Genera un número n de cuadrados azules de manera aleatoria.
    generarCuadradosAzules(n) {
        for (let i = 0; i < n; i++) {
            let x = this.generarCoordenadaAleatoria(this.canvas.width / 10);
            let y = this.generarCoordenadaAleatoria(this.canvas.height / 10);
            this.cuadradosAzules.push(new Segmento(x, y, 10, 'blue'));
        }
    }

    generarCuadradosRojos(n) {
        for (let i = 0; i < n; i++) {
            let x = this.generarCoordenadaAleatoria(this.canvas.width / 10);
            let y = this.generarCoordenadaAleatoria(this.canvas.height / 10);
            this.cuadradosRojos.push(new Segmento(x, y, 10, 'red'));
        }
    }

    //reiniciarJuego(): Resetea el juego a su estado inicial.
    reiniciarJuego() {
        this.segmentos = [new Segmento(0, 0, 10, 'green')];
        this.cuadradosRojos = [];
        this.cuadradosAzules = [];
        this.puntaje = 0;
        this.perdido = false;
        this.direccion = 'right';
    }

}
