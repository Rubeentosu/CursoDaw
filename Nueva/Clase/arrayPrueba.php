<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio08</title>
</head>
<body>
    <h1>Prueba array con for</h1>
    
    <?php 
    //Con for y el for each para los asociativos siempre
    //Array indexado
    echo "<h2>Con for (solo indexados)</h2>";
    $semana = array("Lunes","Martes","Miercoles","Jueves","Viernes");
    for($i = 0; $i < count($semana); $i++){
        echo $semana[$i]."<br>";
    }

    echo "<h2>Con foreach indexado</h2>";
    foreach($semana as $sem){
        echo $sem."<br>";
    }

    //Array asociativo
    echo "<h2>Con foreach asociativo</h2>";
    $asociativo = ["so1"=> "Windows 10", "so2" => "Windows Server 2019", "so3" => "Ubuntu 22.04", "so4" => "Ubunto Server LTS"];
    foreach($asociativo as $indice => $dato){
        echo $indice.": ".$dato."<br>";
    }
    echo "<h2><br>Cambiar los valores de un array</h2>";
    $numeros = [1,2,3,4,5,6];
    foreach($numeros as $num){
        echo $num."<br>";
    }
    var_dump($numeros);
    echo "<br><br>";
    foreach($numeros  as& $num1){
        $num1 = $num1*2;
        echo $num1."<br>";
    }
    var_dump($numeros);
    ?>
</body>
</html>