<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio08</title>
</head>
<body>
    <h1>Ejercicio 08 - Arrays</h1>
    
    <?php 
    $array_numerico = [11,20,7,2,35,12,51,1];
    $array_provincia = ["pr1" => "Almería","pr2" => "Cádiz","pr3" => "Córdoba","pr4" => "Granada","pr5" => "Huelva","pr6" => "Jaén","pr7" => "Málaga","pr8" => "Sevilla"];
    echo "<h2>El contenido del array numérico es: <br></h2>";
    foreach($array_numerico as $n){
        echo $n."<br>";
    }
    echo "<h2>El nombre del índice y el contenido del array provincia es: <br></h2>";
    foreach($array_provincia as $p => $i){
        echo $p.": ".$i."<br>";
    }

    echo "<h2>Los numeros pares mas cercanos al contenido inicial es: <br></h2>";
    foreach($array_numerico as $n){
        if($n % 2 !=0){
            $n = $n+1;
        }
        echo $n."<br>";
    }

    echo "<h2>El contenido modificado del array provincia es: <br></h2>";
    foreach($array_provincia as & $p){
        $p = "Provincia de ".$p;
        echo $p."<br>";
    }
    echo"<br>";
    var_export($array_numerico);
    echo"<br>";
    print_r($array_numerico);
    ?>
</body>
</html>