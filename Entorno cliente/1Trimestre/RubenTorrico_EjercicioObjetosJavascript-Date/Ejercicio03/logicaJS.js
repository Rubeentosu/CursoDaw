//Hacemos la funcion ver enunciado para ver el enunciado del ejercicio
function verEnunciado(){
    let enunciado = "<u>Ejercicio 1.</u> <p> Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario una fecha.<br>\
Crea una función que reciba como argumento esa fecha y devuelva el número de días del mes introducido para ese año.</p>";
    document.getElementById("enunciadoAE").innerHTML = enunciado;
}

//Hacemos la funcion ver resolucion para ver el resultado del ejercicio
function verResolucion() {
    let fecha1 = prompt("Introduce la fecha en formato DD/MM/YYYY");
    let resolucion = nDias(fecha1);
    document.getElementById("resolucionAE").innerHTML = resolucion;
}
function nDias(fecha1) {
    let partes = fecha1.split("/");
    let dia = parseInt(partes[0]);
    let mes = parseInt(partes[1])-1; // Los meses en JavaScript van de 0 a 11
    let anio = parseInt(partes[2]);
    let fechaFormato1 = new Date(anio, mes, dia);
    if (fechaFormato1.getDate() === dia && fechaFormato1.getMonth() === mes && fechaFormato1.getFullYear() === anio) {
        let dias = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (mes === 1 && esBisiesto(anio)) {
            dias[mes] = 29;
        }
        return `El número de días en el mes es ${dias[mes]}`;
    } else {
        return "La fecha no es válida.";
    }
}

function esBisiesto(anio) {
    if (anio % 4 === 0) {    
        if (anio % 100 === 0) {          
            if (anio % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}

