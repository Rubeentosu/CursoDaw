//Hacemos la funcion ver enunciado para ver el enunciado del ejercicio
function verEnunciado(){
    let enunciado = "<u>Ejercicio 1.</u> <p>Realiza una aplicación web que simule el comportamiento del juego de La Primitiva propiedad de Loterías y Apuestas del Estado.<br>\
Nota: La finalidad de este ejercicio es puramente académica, juega responsablemente solo si eres mayor de edad. En ningún caso se pretende fomentar la ludopatía.<br>\
La aplicación solicitará al usuario, mediante una ventana emergente, un número del 1 al 8 correspondiente a una cantidad de combinaciones.<br>\
A continuación, se mostrará en la parte destinada para tal efecto, un boleto con el número de combinaciones, introducido por el usuario, generadas de forma aleatoria.</p>";
    document.getElementById("enunciadoAE").innerHTML = enunciado;
}

//Hacemos la funcion ver resolucion para ver el resultado del ejercicio
function verResolucion(){
    let nCombinaciones = pedirCombinaciones();
    let resolucion = sacarBoleto(nCombinaciones);
    alert(`El número de combinaciones es ${nCombinaciones}`);
    console.log(resolucion);
    document.getElementById("resolucionAE").innerHTML = resolucion;
}

//Funcion para pedir el numero de combinaciones
function pedirCombinaciones(){
    let nCombinaciones = parseInt(prompt("Introduce un número de combinaciones (entre 1 y 8):"));
    if(isNaN(nCombinaciones) || nCombinaciones < 1 || nCombinaciones > 8){
        alert("Debes introducir un número entre 1 y 8.");
        return pedirCombinaciones();
    }
    return nCombinaciones;
}

//Funcion generar un boleto con 6 numeros aleatorios para cada combinacion y no se pueden repetirse
function sacarBoleto(nCombinaciones){
    let boleto = "";
    for(let i = 0; i < nCombinaciones; i++){
        let numerosCombinacion = [];
        do{
            let numero = Math.floor(Math.random() * 48) + 1;
            if(!numerosCombinacion.includes(numero)){
                numerosCombinacion.push(numero);
            }
        }while(numerosCombinacion.length < 6);
        
        boleto += `Combinación ${i+1}: `;
        for (let i = 0; i < numerosCombinacion.length; i++) {
            boleto += `<span class="circulos">${numerosCombinacion[i]}</span> `;
        }
        boleto += `<br>`;
    }
    let Reintegro = Math.floor(Math.random() * 9);
    boleto += `Reintegro: <span class="circulos">${Reintegro}</span><br>`;
    return boleto;
}
