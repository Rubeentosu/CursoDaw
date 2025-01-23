<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Funciones</title>
</head>
<body>
    <h1>Ejercicio 16 - Funciones</h1>
    <?php 
    function array_aleatorio($tamaño, $min, $max) {
        for ($i = 1; $i <= $tamaño; $i++) {
            $array[] = rand($min, $max);
        }
        return $array;
    }
    $numeros = array_aleatorio(10, 1, 34);
    function array_ej16($array) {
        echo "El array inicial:<br>";
        foreach ($array as $i => $n) {
            echo "[".$i."]  ".$n."<br>";
        }
        echo "<br>El array con los cambios:<br>";
        foreach ($array as $i => &$n) {
            if ($n % 2 == 0) {
                $n *= 2;
            } else {
                $n += 1;
            }
            echo "[".$i."]  ".$n."<br>";
        }
    }
    array_ej16($numeros); 
?>



</body>
</html>