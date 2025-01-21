function verEnunciado() {
    let enunciado = `<u>Ejercicio 3.</u> 
    <p>OBJETO NAVIGATOR. Implementa una aplicación web que simule una web de descarga de software donde se sugiera al usuario la versión del mismo a instalar.
Diseña la página web principal lo más fidedignamente posible a este prototipo.
Nota: El borde negro de la imagen es meramente un elemento decorativo de este documento de texto.
Sustituye <tuSistemaOperativo> por el sistema operativo donde se ejecute la aplicación.
Al clicar el botón de descarga, se generará una nueva ventana con las siguientes dimensiones.
Altura máxima disponible en la pantalla para el uso de ventanas.
Anchura de 500 píxeles.
Esta ventana deberá ser lo más fidedignamente posible a este prototipo.
La opción seleccionada por defecto en el formulario dependerá de la versión del sistema operativo donde se ejecute la aplicación.
Nota: para saber en qué navegador web se ejecuta la aplicación, puedes hacer uso de la propiedad user-agent.
La salida de esta propiedad es una cadena de texto, que has de tratar para determinar el navegador en cuestión:
Si contiene “Chrome” y "Edg", se trata de Google Chrome.
Si contiene "Firefox", se trata de Mozilla Firefox.
Si contiene "Safari" y "Chrome", se trata de Apple Safari.
Si contiene “Edg”, se trata de Microsoft Edge.
Si contiene "Opera" o "OPR", se trata de Opera.
En otro caso, indica “Navegador desconocido”

Nota II: También puedes usar la propiedad userAgentData y sus métodos.
</p>`;
    document.getElementById("enunciadoAE").innerHTML = enunciado;
}

function averiguarSO() {
    let userAgent = navigator.userAgent || navigator.userAgentData;
    if (userAgent.includes("Windows NT")) return "Windows";
    if (userAgent.includes("Mac OS X")) return "MacOS";
    if (userAgent.includes("Linux")) return "Linux";
    if (userAgent.includes("Android")) return "Android";
    if (/iPhone|iPad|iPod/.test(userAgent)) return "iOS";
    return "un sistema operativo desconocido";
}

function escribirSO() {
    document.getElementById("sistemaOperativo").textContent = averiguarSO();
}

function abrirVentana() {
    let altura = window.screen.availHeight;
    let anchura = 500;
    window.open("nuevaVentana.html", "nuevaVentana", `width=${anchura},height=${altura},resizable=no`);
}

function averiguarNavegador() {
    let navegador = navigator.userAgent;
    let navegadorNombre = "Desconocido";
    if (navegador.includes("Chrome") && navegador.includes("Edg")) {
      navegadorNombre = "Google Chrome";
    } else if (navegador.includes("Firefox")) {
      navegadorNombre = "Mozilla Firefox";
    } else if (navegador.includes("Safari") && navegador.includes("Chrome")) {
      navegadorNombre = "Safari";
    } else if (navegador.includes("Edg")) {
      navegadorNombre = "Microsoft Edge";
    } else if (navegador.includes("Opera") || navegador.includes("OPR")) {
      navegadorNombre = "Opera";
    }
    return navegadorNombre;
}

 function averiguarNavegadorVersion() {
     let navegador = navigator.userAgent;
     let versionNumero = "Desconocida";
     if (navegador.includes("Chrome")) {
       versionNumero = navegador.match(/Chrome\/([0-9\.]+)/)[1];
     } else if (navegador.includes("Firefox")) {
       versionNumero = navegador.match(/Firefox\/([0-9\.]+)/)[1];
     } else if (navegador.includes("Safari")) {
       versionNumero = navegador.match(/Version\/([0-9\.]+)/)[1];
     } else if (navegador.includes("Edge")) {
       versionNumero = navegador.match(/Edge\/([0-9\.]+)/)[1];
     }
     return versionNumero;
 }

// Función principal para obtener la ubicación
function obtenerUbicacion() {
    navigator.geolocation.getCurrentPosition(exito, error);
  }
  
  // Función de éxito
function exito(position) {
    let texto = "";
    let latitud = position.coords.latitude;
    let longitud = position.coords.longitude;
    texto += "Latitud: " + latitud;
    texto += " Longitud: " + longitud;
  
    document.getElementById("localizacion").innerHTML = texto;
  }
  // Función de error
function error(err) {
    let texto = ""; 
    texto += "<br/>No se pudo obtener la ubicación.";
  
    document.getElementById("localizacion").innerHTML = texto;
  }


function inicializar() {
    document.getElementById("navegador1").textContent = averiguarNavegador();
    document.getElementById("navegador2").textContent = averiguarNavegador();
    document.getElementById("navegadorVersion").textContent = averiguarNavegadorVersion();
    obtenerUbicacion();
    }

