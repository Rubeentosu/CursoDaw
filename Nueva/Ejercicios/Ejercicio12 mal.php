<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio09</title>
</head>
<body>
    <h1>Ejercicio 11 - Arrays</h1>
    <?php 
    $numeros = [];
    // Generar números aleatorios
    for ($i = 1; $i <= 20; $i++) {
        $numeros[] = rand(1, 50);
    }
    echo "Array original:<br>";
    echo "<table>";
    echo "<tr>";
    for ($i = 0; $i < 20; $i++) {
        echo "<th>" . $i . "</th>";
    }
    echo "</tr>";  
    echo "<tr>";
    for ($i = 0; $i < count($numeros); $i++) {
        echo "<td>" . $numeros[$i] . "</td>";
    }
    echo "</tr>";

    echo "</table>";

    $arrayPares = [];
    $arrayImpares = [];

    foreach($numeros as $n){
        if($n % 2 == 0){
            $arrayPares[] += $n;
        }else{$arrayImpares[] += $n;}
    }
    echo "Array resultante con los pares al principio y los impares al final :<br>";

    echo "<table>";
    echo "<tr>";
    for ($i = 0; $i < 20; $i++) {
        echo "<th>" . $i . "</th>";
    }
    echo "</tr>";
    echo "<tr>";
     for ($i = 0; $i < count($arrayPares); $i++) {
         echo "<td>" . $arrayPares[$i] . "</td>";
     }
     for ($i = 0; $i < count($arrayImpares); $i++) {
         echo "<td>" . $arrayImpares[$i] . "</td>";
     }
     for ($i = 0; $i < count($$numeros); $i++) {
         echo "<td>" . $numeros[$i] . "</td>";
     }
    echo "</tr>";

    echo "</table>";
    ?>
    <?php 
    $numeros = [];
    // Generar números aleatorios
    for ($i = 1; $i <= 20; $i++) {
        $numeros[] = rand(1, 50);
    }

    echo "Array original:<br>";
    echo "<table border='1'>";
    echo "<tr>";
    for ($i = 0; $i < 20; $i++) {
        echo "<th>" . $i . "</th>";
    }
    echo "</tr>";  
    echo "<tr>";
    for ($i = 0; $i < count($numeros); $i++) {
        echo "<td>" . $numeros[$i] . "</td>";
    }
    echo "</tr>";
    echo "</table>";

    $arrayPares = [];
    $arrayImpares = [];

    // Separar pares e impares
    foreach ($numeros as $n) {
        if ($n % 2 == 0) {
            $arrayPares[] = $n; // Agregar a pares
        } else {
            $arrayImpares[] = $n; // Agregar a impares
        }
    }

    $numeros = [];
    foreach ($arrayPares as $par) {
        $numeros[] = $par; // Añadir pares
    }
    foreach ($arrayImpares as $impar) {
        $numeros[] = $impar; // Añadir impares
    }

    echo "Array resultante con los pares al principio y los impares al final:<br>";
    echo "<table border='1'>";
    echo "<tr>";
    for ($i = 0; $i < 20; $i++) {
        echo "<th>" . $i . "</th>";
    }
    echo "</tr>";
    echo "<tr>";
    for ($i = 0; $i < count($numeros); $i++) {
        echo "<td>" . $numeros[$i] . "</td>";
    }
    echo "</tr>";
    echo "</table>";
    ?>


</body>
</html>