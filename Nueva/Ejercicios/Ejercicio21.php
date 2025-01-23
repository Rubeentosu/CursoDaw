<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 21</title>
</head>

<body>
    <h1>GET</h1>
    <?php
    if(empty($_GET["num1"]) || empty($_GET["num2"]) ){
        echo "Falta parametros";
    }else if(is_numeric($_GET["num1"]) && is_numeric($_GET["num2"]) ){
        echo $suma = "La suma de ".$_GET["num1"]." y ".$_GET["num2"]." es: ".$_GET["num1"] + $_GET["num2"];
        
    }else echo "Los parametros no son numeros";

    ?>
</body>

</html>