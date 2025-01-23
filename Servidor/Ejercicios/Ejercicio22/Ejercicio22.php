<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio22</title>
</head>
<body>
    <?php
        if ($_GET["num1"] == null || $_GET["num2"] == null) {
            echo "Faltan parametros o los valores son inválidos";
        } else {
            // Comprobamos si ambos parámetros son numéricos
            if (is_numeric($_GET["num1"]) && is_numeric($_GET["num2"])) {
                $num1 = $_GET["num1"];
                $num2 = $_GET["num2"];
                
                // Comprobamos que num2 no sea igual a 0 antes de hacer la división
                if ($num2 == 0) {
                    echo "No se puede dividir entre 0";
                } else {
                    echo "La suma de " . $num1 . " + " . $num2 . " es: " . ($num1 + $num2) . "<br>";
                    echo "La resta de " . $num1 . " - " . $num2 . " es: " . ($num1 - $num2) . "<br>";
                    echo "La multiplicación de " . $num1 . " * " . $num2 . " es: " . ($num1 * $num2) . "<br>";
                    echo "La division de " . $num1 . " / " . $num2 . " es: " . ($num1 / $num2);
                }
            } else {
                echo "Los parametros no son numeros";
            }
        }
    ?>


</body>
</html>