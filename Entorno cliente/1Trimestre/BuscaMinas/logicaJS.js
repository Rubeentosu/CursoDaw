//Hacemos la funcion ver enunciado para ver el enunciado del ejercicio
function verEnunciado(){
	let enunciado = "<h3>BUSCAMINAS</h3>\
	<p>Implementa el juego del buscaminas en JS.\
	Para ello, se definirá un tablero, un array en 2d o matriz, con 📦 y 💣 (busca el carácter especial html para imprimir ese icono).<br>\
	A continuación el usuario, introducirá una coordenada. Por ejemplo: 0,0.<br>\
	El programa mostrará si dicha coordenada está vacía 📦 o contiene una mina 💣, mostrando el tablero cambiado para dicha acción.<br>\
	La caja está vacía! Puedes seguir jugando…<br>\
	💨 📦 📦<br>\
	📦 📦 📦<br>\
	📦 📦 📦<br>\
	La caja contiene una mina, GAME OVER!!<br>\
	💥 📦 📦<br>\
	📦 📦 📦<br>\
	📦 📦 📦<br>\
	En caso de que hubiese una mina, el juego terminaría mostrando el mensaje anterior en la parte destinada a tal efecto. En caso contrario, se le pedirá al usuario otra coordenada.<br>\
	Adicionalmente, el juego termina si descubre todas las cajas vacías mostrando el tablero y el mensaje: No hay más cajas vacías, YOU ARE A WINNER!!!</p>"
	document.getElementById("enunciadoAE").innerHTML = enunciado;
}

// Tablero con cajas y una mina
let tableroConBomba = [
	['📦', '💣', '💣'],
	['💣', '💣', '💣'],
	['💣', '💣', '💣']
];

// Tablero sin bomba donde se mostrarán los resultados
let tableroSinBomba = [
	['📦', '📦', '📦'],
	['📦', '📦', '📦'],
	['📦', '📦', '📦']
];

let cajasVacias = 0; // Contador de cajas vacías descubiertas
let totalCajas = 0;  // Total de cajas vacías en el tablero
let eligeBomba = false; // Indica si se ha encontrado una mina

// Función para iniciar el juego
function empezarJuego() {
	// Reinicia el tablero sin la bomba
	tableroSinBomba = [
		['📦', '📦', '📦'],
		['📦', '📦', '📦'],
		['📦', '📦', '📦']
	];

	// Reinicia contadores
	cajasVacias = 0;
	eligeBomba = false;
	coordenadasSeleccionadas = []; // Reinicia las coordenadas seleccionadas
	totalCajas = 0; // Reinicia el contador de cajas vacías

	// Contar el total de cajas vacías en el tablero con bombas
	for (let i = 0; i < tableroConBomba.length; i++) {
		for (let j = 0; j < tableroConBomba[i].length; j++) {
			if (tableroConBomba[i][j] === '📦') {
				totalCajas++; // Incrementa el contador por cada caja vacía
			}
		}
	}
	document.getElementById("resolucionAE").innerHTML = mostrarTablero(tableroSinBomba);
}

// Función para mostrar el tablero
function mostrarTablero(tablero) {
	let resultado = "";
	// Recorre cada fila y columna del tablero
	for (let i = 0; i < tablero.length; i++) {
		for (let j = 0; j < tablero[i].length; j++) {
			resultado += tablero[i][j] + "\t"; // Añade cada elemento al resultado
		}
		resultado += "<br>";
	}
	return resultado;
}

let coordenadasSeleccionadas = []; // Array para guardar las coordenadas seleccionadas

// Función para continuar el juego
function continuarJuego() {
	if (eligeBomba) return 0; // Si se encontró una mina, no hace nada más

	// Solicita al usuario que elija coordenadas
	let coordenadaY = parseInt(prompt("Elige la primera coordenada (0-2)"));
	let coordenadaX = parseInt(prompt("Elige la segunda coordenada (0-2)"));

	// Valida que las coordenadas estén dentro del rango permitido
	if (coordenadaY < 0 || coordenadaY > 2 || coordenadaX < 0 || coordenadaX > 2) {
		alert("Coordenadas inválidas. Intenta de nuevo.");
		return;
	}

	// Verifica si la coordenada ya ha sido seleccionada
	let coordenadaYaSeleccionada = false;
	for (let i = 0; i < coordenadasSeleccionadas.length; i++) {
		if (coordenadasSeleccionadas[i][0] === coordenadaY && coordenadasSeleccionadas[i][1] === coordenadaX) {
			coordenadaYaSeleccionada = true; // Marca que la coordenada ya fue seleccionada
			break;
		}
	}

	if (coordenadaYaSeleccionada) {
		alert("Esta coordenada ya ha sido seleccionada. Intenta de nuevo.");
		return;
	}

	// Registra la coordenada seleccionada
	coordenadasSeleccionadas.push([coordenadaY, coordenadaX]);

	// Comprueba si hay una mina en la coordenada seleccionada
	if (tableroConBomba[coordenadaY][coordenadaX] === '💣') {
		tableroSinBomba[coordenadaY][coordenadaX] = '💥';
		eligeBomba = true;

		let resolucion = "<i>La caja contiene una mina, <b>GAME OVER!!</i> <br>" + mostrarTablero(tableroSinBomba);
		document.getElementById("resolucionAE").innerHTML = resolucion;

	} else if (tableroConBomba[coordenadaY][coordenadaX] === '📦') {
		tableroSinBomba[coordenadaY][coordenadaX] = '💨';
		cajasVacias++; // Incrementa el contador de cajas vacías

		let resolucion = mostrarTablero(tableroSinBomba);
		document.getElementById("resolucionAE").innerHTML = resolucion;

		// Verifica si se han descubierto todas las cajas vacías y marca que el juego ya ha sido terminado
		if (cajasVacias === totalCajas) {
			//Recorro el tablero con la bomba para cambiar en el tablero sin bomba
			for (let i = 0; i < tableroConBomba.length; i++) {
				for (let j = 0; j < tableroConBomba[i].length; j++) {
					if (tableroConBomba[i][j] === '💣') {
						tableroSinBomba[i][j] = '💣';
					}
				}
			}
			resolucion = "<i>No hay más cajas vacías,<b>YOU ARE A WINNER!!!</b></b> <br>" + mostrarTablero(tableroSinBomba);
			document.getElementById("resolucionAE").innerHTML = resolucion;
			eligeBomba = true;
		}
	}
}


