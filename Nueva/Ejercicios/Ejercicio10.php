<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio09</title>
</head>
<body>
    <h1>Ejercicio 10 - Arrays</h1>
    <?php 
    for($i = 1; $i <=15;$i++){
        $arrayAleatorio[] = rand(1,50);
    }
    foreach($arrayAleatorio as $n){
        $num_cubo[]=$n*$n;
    }

    foreach($arrayAleatorio as $n){
        $num_cuadrado[]=$n*$n*$n*$n;
    }
    
    // Comenzamos a crear la tabla
    echo "<table>";
    echo "<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>";

    // Mostramos los valores en las columnas correspondientes
    for ($i = 0; $i < count($arrayAleatorio); $i++) {
        echo "<tr>";
        echo "<td>&nbsp;" . $arrayAleatorio[$i] . "&nbsp;</td>";
        echo "<td>&nbsp;" . $num_cubo[$i] . "&nbsp;</td>";
        echo "<td>&nbsp;" . $num_cuadrado[$i] . "&nbsp;</td>";
        echo "</tr>";
    }

    echo "</table>";
    ?>
</body>
</html>