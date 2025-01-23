<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Funciones</title>
</head>
<body>
    <h1>Ejercicio 18 - Funciones</h1>
    
    <?php 
    $palabras = ["Radar","Animal","Reconocer","Aula","Periquito"];
    function palindromo1($array){
        foreach($array as $n){
            $minuscula = strtolower($n);
            if($minuscula == strrev($minuscula)){
                // Si son iguales, es un palíndromo
                echo "¿Es ".ucfirst($n)." una palabra palindroma?  Si <br>";
            } else {
                // Si no son iguales, no es un palíndromo
                echo "¿Es ".ucfirst($n)." una palabra palindroma?  No <br>";
            }
        }
    }
    palindromo1($palabras);
    echo "<br><br>";

    function palindromo2($array) {
        foreach ($array as $p) {
            $minuscula = strtolower($p);
            $esPalindromo = true;
            $longitud = strlen($minuscula);
            
            // Se compara cada letra con su correspondiente desde el final
            for ($i = 0; $i < $longitud / 2; $i++) {
                if ($minuscula[$i] != $minuscula[$longitud - $i -1]) {
                    // Si se encuentra una palabra diferente la palabra ya no es palindroma
                    $esPalindromo = false;
                }
            }
            // Se imprime el resultado de la verificación
            if ($esPalindromo) {
                echo "¿Es " . ucfirst($minuscula) . " una palabra palíndroma?  Sí <br>";
            } else {
                echo "¿Es " . ucfirst($minuscula) . " una palabra palíndroma?  No <br>";
            }
        }
    }
    palindromo2($palabras);
?>





</body>
</html>