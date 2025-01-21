<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Funciones</title>
</head>
<body>
    <h1>Ejercicio 19 - Funciones</h1>
    <?php 
    function imprimir($array) {
        foreach ($array as $i => $n) {
            echo "[".$i."]  ".$n."<br>";
        }
    }

    function array_aleatorio() {
        for ($i = 1; $i <= 20; $i++) {
            $array[] = rand(1, 100);
        }
        return $array;
    }

    function array_limite(&$array , $limite) {
        foreach($array as $i => $n){
            if($n >= $limite){
                unset($array[$i]);
            }
        }
        $array=array_values($array);
        echo "El array despues de ponerle como limite ".$limite." es:<br>";
        return $array;
        unset($array);
    }

    //El array con los numeros aleatorios
    $num = array_aleatorio();
    imprimir($num);
    echo "<br>";
    
    //El array imprimido con el limite
    array_limite($num,50);
    imprimir($num);
?>
</body>
</html>