<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Funciones</title>
</head>
<body>
    <h1>Ejercicio 20 - Funciones</h1>
    <?php 
    $texto = "Todos los dias de la semana voy al IES Jorge Guillén porque estoy en segundo curso del ciclo formativo DAW";
    $palabra =  "DAW";
    $palabrasProhibidas = ["segundo", "DAW","IES"];

    fun_texto($texto, $palabra, $palabrasProhibidas);

    function fun_texto($texto, $palabra, $palabrasProhibidas) {
        echo "Longitud del texto: " . strlen($texto) . "<br>";
        echo "Cantidad de palabras: " . str_word_count($texto) . "<br>";
        echo "La palabra " . $palabra . " aparece " . contarPalabra($palabra, $texto) . " vez.<br>";
        
        foreach ($palabrasProhibidas as $n) {
            // Crear una cadena de asteriscos
            $asteriscos = "";

            for ($i = 0; $i < strlen($n); $i++) {
                $asteriscos .= "*";
            }
            // Reemplazar la palabra prohibida por la cadena de asteriscos
            $texto = str_ireplace($n, $asteriscos, $texto);
        }
        echo "El texto con las palabras prohibidas reemplazadas por asteriscos: " . $texto;
    }

    function contarPalabra($palabra, $texto) {
        return substr_count(strtolower($texto), strtolower($palabra));
    }
    ?>



</body>
</html>