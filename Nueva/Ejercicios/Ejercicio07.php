<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio07</title>
</head>
<body>
    <h1>Ejercicio 07 - Estructuras control de flujo</h1>
    
    <?php 
    $numero = 10;
    echo "<table border=1>";
    for($i = 1; $i <= 10;$i++){
        echo "<tr>";
        for($c = 1; $c <= 10;$c++){
            echo "<td>$numero</td>";
            $numero = $numero+10;
        }
        echo "</tr>";
        }
    echo "</table>";
    ?>
</body>
</html>