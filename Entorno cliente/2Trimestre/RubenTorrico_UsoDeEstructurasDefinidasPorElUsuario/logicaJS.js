function verEnunciado() {
    let enunciado = `<u>Ejercicio 4.1 USO DE ESTRUCTURAS DEFINIDAS POR EL USUARIO</u> 
    <p>
        Implementa una aplicación web para gestionar las comandas de los clientes del Kiosko Fernando. Para ello, administramos los clientes que se sientan en cada mesa y que productos pide cada cliente.
        Almacenaremos la siguiente información de cada mesa:<br>
        - Ubicación de la mesa (ver imagen adjunta).<br>
        - Clientes de la mesa (dentro de cada cliente tendremos una serie de productos y para cada producto almacenaremos el nombre y precio).
    </p>`;
    document.getElementById("enunciadoAE").innerHTML = enunciado;
}

const productos = {
    zamburinas: 3.5,
    mejillones: 3.5,
    gambas: 3.5,
    vinoBlanco: 3.5,
    cervezaVictoria: 3.5
};

class mesa{
    constructor()
}