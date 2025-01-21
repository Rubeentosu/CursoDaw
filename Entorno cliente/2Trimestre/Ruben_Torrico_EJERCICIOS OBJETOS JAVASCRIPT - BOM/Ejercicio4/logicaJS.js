function verEnunciado() {
    let enunciado = `<u>Ejercicio 4.</u> 
    <p>OBJETO LOCATION. Implementa una página web que tenga un texto en el encabezado principal “¿Desea contactar con nosotros?”.<br>
El siguiente texto en un párrafo “Haz click en el siguiente enlace para” <abrir un Webmail aleatorio>, siendo el texto contenido entre <> un enlace.<br>
Cuando se presione dicho enlace, se generará un valor aleatorio entre 0 y 2.<br>
Si el valor generado es un cero, la aplicación redirigirá a la página web de login de hotmail.<br>
Si el valor generado es uno, la aplicación redirigirá a la página web de login de gmail.<br>
Si el valor generado es un dos, la aplicación redirigirá a la página web de login de serviciodecorreo.es</p>`;
    document.getElementById("enunciadoAE").innerHTML = enunciado;
}
function abrirVentana(){
    window.open("pagina1.html", "Nueva Ventana", "width=1280,height=720");
}
function redireccion(){
    let numero = numeroAleatorio();
    console.log(numero);
    if(numero == 0){
        location.replace("https://hotmail.es/");
    }else if(numero == 1){
        location.replace("https://mail.google.com/");
    }else if(numero == 2){
        location.replace("https://www.serviciodecorreo.es/");
    }
}

function numeroAleatorio(){
    return Math.floor(Math.random() * 3);
}
