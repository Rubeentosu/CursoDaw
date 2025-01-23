<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h1>EJERCICIO 1 TEMA2. Rubén Torrico Suárez</h1>
    <br>
    <?php
    $vector1 = array("Almería","Cádiz","Córdoba","Granada","Huelva","Jaen","Málaga","Sevilla");
    $vector2 = array("art1" => "Impresora 3D","art2" => "Monitores INVES","art3" => "Teclado Logitech G","art4" => "Impresora HP","iva" => 0.28 ,"fra" => FALSE);

    //Para mostrar el contenido, tipo de datos y valores del array
    var_dump($vector1);

    echo "<br>";
    echo "<br>";
    echo "<b>La capital de Andalucia es ".$vector1[7];
    echo "<br>";
    echo "<br>";
    echo "<br> </b>";
    echo "El articulo 4: ".$vector2["art4"];
    echo "<br>";
    echo"El articulo ".$vector2["art1"]." tiene asociado un impuesto ".$vector2["iva"]*100 ."%";
    echo "<br>";
    echo "<br>";
    echo "<b>Factura: ".JSON_ENCODE($vector2["fra"]);
    ?>
</body>
</html>