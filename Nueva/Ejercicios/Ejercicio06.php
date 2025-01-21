<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio06</title>
</head>
<body>
    <h1>Ejercicio 06 - Estructuras control de flujo</h1>
    <?php 
    $numero = 4;
    $resultado = 1;
    if(is_int($numero) && $numero >0){
        for($i = $numero ; $i >= 1; $i--){
            $resultado = $resultado * $i;
        }
        echo "El factorial es ".$resultado;
    }else echo("Error. No existe el factorial");
    ?>
</body>
</html>