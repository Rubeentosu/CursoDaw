//Hacemos la funcion ver enunciado para ver el enunciado del ejercicio
function verEnunciado(){
    let enunciado = "<u>Ejercicio 11.</u> <p>Realiza una aplicación web dónde se \
    solicite por pantalla, mediante una ventana emergente, al usuario una cantidad\
     de dinero (controlar que sea múltiplo de 5) y tras ello desglose el cambio en\
      billetes de 500,200,100,50,20,10,5 intentando dar el mínimo número de billetes.<br>\
      La aplicación mostrará en la parte destinada para tal efecto, el número mínimo de billetes.</p>"
    document.getElementById("enunciadoAE").innerHTML = enunciado;
}

//Hacemos la funcion ver resolucion para ver el resultado del ejercicio
function verResolucion() {
    // Solicitar al usuario que introduzca una cantidad de dinero
    let cantidad = parseInt(prompt("Introduce una cantidad de dinero (múltiplo de 5):"));
    let resolucion = "";

    // Validar si la cantidad ingresada es un número válido y múltiplo de 5
    if (cantidad <= 0 || cantidad % 5 !== 0) {
        resolucion = "Por favor, introduce una cantidad válida (múltiplo de 5)."; // Mensaje de error
    } else {
        // Desglose de billetes de 500
        if (cantidad >= 500) {
            let cantidadBilletes = parseInt(cantidad / 500); // Calcular cuántos billetes de 500 se necesitan
            resolucion += `500€: ${cantidadBilletes} billetes<br>`; // Añadir al resultado
            cantidad -= cantidadBilletes * 500; // Actualizar la cantidad restante
        }
        // Desglose de billetes de 200
        if (cantidad >= 200) {
            let cantidadBilletes = parseInt(cantidad / 200); // Calcular cuántos billetes de 200 se necesitan
            resolucion += `200€: ${cantidadBilletes} billetes<br>`;
            cantidad -= cantidadBilletes * 200;
        }
        // Desglose de billetes de 100
        if (cantidad >= 100) {
            let cantidadBilletes = parseInt(cantidad / 100); // Calcular cuántos billetes de 100 se necesitan
            resolucion += `100€: ${cantidadBilletes} billetes<br>`;
            cantidad -= cantidadBilletes * 100;
        }
        // Desglose de billetes de 50
        if (cantidad >= 50) {
            let cantidadBilletes = parseInt(cantidad / 50); // Calcular cuántos billetes de 50 se necesitan
            resolucion += `50€: ${cantidadBilletes} billetes<br>`;
            cantidad -= cantidadBilletes * 50;
        }
        // Desglose de billetes de 20
        if (cantidad >= 20) {
            let cantidadBilletes = parseInt(cantidad / 20); // Calcular cuántos billetes de 20 se necesitan
            resolucion += `20€: ${cantidadBilletes} billetes<br>`;
            cantidad -= cantidadBilletes * 20;
        }
        // Desglose de billetes de 10
        if (cantidad >= 10) {
            let cantidadBilletes = parseInt(cantidad / 10); // Calcular cuántos billetes de 10 se necesitan
            resolucion += `10€: ${cantidadBilletes} billetes<br>`;
            cantidad -= cantidadBilletes * 10;
        }
        // Desglose de billetes de 5
        if (cantidad >= 5) {
            let cantidadBilletes = parseInt(cantidad / 5); // Calcular cuántos billetes de 5 se necesitan
            resolucion += `5€: ${cantidadBilletes} billetes<br>`;
        }
    }
    document.getElementById("resolucionAE").innerHTML = resolucion;
}
