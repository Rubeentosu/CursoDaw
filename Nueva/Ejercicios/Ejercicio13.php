<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio09</title>
</head>
<body>
    <h1>Ejercicio 13 - Arrays</h1>
    <?php 
    $numColor = [];

    // Generar números aleatorios sin repetirse
    for ($i = 0; $i <= 15; $i++) {
        $randNum = rand(1, 20);
        if (!in_array($randNum, $numColor)) {
            $numColor[] = $randNum;
        }else $i--;
    }
    echo "<table>";
    echo "<tr>";
    for ($i = 0; $i <= 15; $i++) {
        echo "<th>" . $i . "</th>";
    }
    echo "</tr>";  
    echo "<tr>";
    for ($i = 0; $i < count($numColor); $i++) {
        if($numColor[$i] % 2 == 0)
        echo "<td style=\"color:red\">" . $numColor[$i] . "</td>";
        else echo "<td style=\"color:blue\">" . $numColor[$i] . "</td>";
    }
    echo "</tr>";
    echo "</table>";

    ?>


</body>
</html>
