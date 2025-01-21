//Hacemos la funcion ver enunciado para ver el enunciado del ejercicio
function verEnunciado(){
    let enunciado = "<u>Ejercicio 9.</u> <p></p>"
    document.getElementById("enunciadoAE").innerHTML = enunciado;
}

//Hacemos la funcion ver resolucion para ver el resultado del ejercicio

        // Función principal que realiza la operación
        function verResolucion() {
            // La cadena original
            let cadenaOriginal = "Consiste en lanzar    aros";

            // Mostrar el menú con las opciones
            let menu = `
            1. Número total de caracteres
            2. Carácter en la octava posición
            3. Código Unicode del primer carácter
            4. Concatenar con otra cadena
            5. Comprobar si termina con "aro"
            6. Convertir Unicode 65 a carácter
            7. Comprobar si contiene "lanzar"
            8. Posición del primer "a"
            9. Posición del último "a"
            10. Comparar con otra cadena
            11. Coincidencias con "ar"
            12. Repetir la cadena 3 veces
            13. Reemplazar "lanzar" por "coger"
            14. Buscar "ste"
            15. Obtener del primero al quinto carácter
            16. Obtener palabras de la cadena
            17. Comprobar si comienza con "Consiste en"
            18. Obtener 7 caracteres a partir del segundo
            19. Obtener caracteres desde el cuarto
            20. Convertir a mayúsculas
            21. Convertir a minúsculas
            22. Eliminar espacios extra entre palabras`;

            // Solicitar al usuario que elija una opción
            let opcion = prompt("Elige una operación:\n" + menu);

            let resultado = "";

            // Switch para manejar las operaciones
            switch (opcion) {
                case "1":
                    resultado = `Número total de caracteres (incluyendo espacios): ${cadenaOriginal.length}`;
                    break;
                case "2":
                    resultado = `El carácter en la octava posición es: ${cadenaOriginal.charAt(7)}`;
                    break;
                case "3":
                    resultado = `El código Unicode del primer carácter es: ${cadenaOriginal.charCodeAt(0)}`;
                    break;
                case "4":
                    let cadenaConcatenada = cadenaOriginal.concat(" ¿roto? … ¿o mejorado?");
                    resultado = `Cadena concatenada: ${cadenaConcatenada}\n¿Se modifica la primera cadena? No, ya que cuando concatenas una cadena nueva a la original, se crea una nueva cadena, pero la cadena original no cambia.`;
                    break;
                case "5":
                    resultado = `¿La cadena termina con "aro"? ${cadenaOriginal.endsWith("aro")}`;
                    break;
                case "6":
                    resultado = `El carácter equivalente al Unicode 65 es: ${String.fromCharCode(65)}`;
                    break;
                case "7":
                    resultado = `¿La cadena contiene "lanzar"? ${cadenaOriginal.includes("lanzar")}`;
                    break;
                case "8":
                    resultado = `La posición del primer carácter 'a' es: ${cadenaOriginal.indexOf('a')}`;
                    break;
                case "9":
                    resultado = `La posición del último carácter 'a' es: ${cadenaOriginal.lastIndexOf('a')}`;
                    break;
                case "10":
                    const cadenaComparar = "Consiste en lanzar aros";  // La cadena sin los espacios extra
                    // Comparación de las cadenas
                    const comparacion = cadenaOriginal.localeCompare(cadenaComparar);
                        
                    if (comparacion === 0) {
                        resultado = "Las cadenas son iguales.";
                    } else if (comparacion < 0) {
                        resultado = `"${cadenaOriginal}"(cadena con espacios) iría antes que "${cadenaComparar}" en orden alfabético.(Los espacios tienen un valor menor (Unicode) que las letras.)`;
                    } else {
                        resultado = `"${cadenaComparar}" iría antes que "${cadenaOriginal}" en orden alfabético.`;
                    } 
                    break;
                case "11":
                    resultado = `Coincidencias de "ar" en la cadena: ${cadenaOriginal.match(/ar/g)}`;
                    break;
                case "12":
                    resultado = `Cadena repetida 3 veces: ${cadenaOriginal.repeat(3)}`;
                    break;
                case "13":
                    resultado = `Cadena con "lanzar" reemplazado por "coger": ${cadenaOriginal.replace("lanzar", "coger")}`;
                    break;
                case "14":
                    resultado = `Posición de "ste" en la cadena: ${cadenaOriginal.indexOf("ste")}`;
                    break;
                case "15":
                    resultado = `Primeros 5 caracteres: ${cadenaOriginal.slice(0, 5)}`;
                    break;
                case "16":
                    resultado = `Las palabras de la cadena son: ${cadenaOriginal.split(' ')}`;
                    break;
                case "17":
                    resultado = `¿La cadena comienza con "Consiste en"? ${cadenaOriginal.startsWith("Consiste en")}`;
                    break;
                case "18":
                    resultado = `7 caracteres a partir del segundo carácter: ${cadenaOriginal.slice(1, 8)}`;
                    break;
                case "19":
                    resultado = `Caracteres desde el cuarto carácter: ${cadenaOriginal.slice(3)}`;
                    break;
                case "20":
                    resultado = `Cadena en mayúsculas: ${cadenaOriginal.toUpperCase()}`;
                    break;
                case "21":
                    resultado = `Cadena en minúsculas: ${cadenaOriginal.toLowerCase()}`;
                    break;
                case "22":
                    resultado = `Cadena con un único espacio entre palabras: ${cadenaOriginal.replace(/\s+/g, ' ')}`;
                    break;
                default:
                    resultado = "Opción no válida.";
            }

            // Mostrar el resultado
            document.getElementById("resolucionAE").innerHTML = resultado;
        }
