<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 2</title>
</head>
<body>
    <?php
    $articulo = 820;
    $PagoEfectivo = "Efectivo";
    $PagoTrajeta = "Tarjeta";
    $descuentoTrajeta = $articulo*0.15;
    $descuentoEfectivo = $articulo * 0.25;


    echo "<br>El precio del alticulo es ".$articulo;
    if($PagoTrajeta = "Tarjeta"){
        $articulo= 820 - $descuentoTrajeta;
        echo "<br>El precio pagando con tarjeta es ".$articulo;
    }
    if($PagoEfectivo = "Efectivo"){
        $articulo= 820 - $descuentoEfectivo;
        echo "<br>El precio pagando con tarjeta es ".$articulo;
    }

    ?>
</body>
</html>