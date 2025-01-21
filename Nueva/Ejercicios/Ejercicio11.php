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
    $ordenadores=[
        ["PORTATILES" =>["marca"=>"HP","procesadores" => "INTEL i5","precio" => 623],["marca"=>"LENOVO","procesadores" => "INTEL i7","precio" => 924]],
        ["SOBREMESA" =>["marca"=>"HP","procesadores" => "AMD Ryzen 5","monitor" => "LG 23.8p","precio" => 710],["marca"=>"ACER","procesadores" => "INTEL i5","monitor" => "MSI 27P","precio" => 685]]
        ];
    var_export($ordenadores);
    echo "<br><br>";

    echo "PORTATILES<BR>";
    foreach($ordenadores[0] as $dato){
        echo "Marca: " . $dato["marca"]."<br>".
        "Procesador: ".$dato["procesadores"]."<br>".
        "Precio: ".$dato["precio"]."<br>";
        echo "<hr>";
    }
    echo"<br><br>";
    echo "SOBREMESA<BR>";
    foreach($ordenadores[1] as $dato){
        echo "Marca: " . $dato["marca"]."<br>".
        "Procesador: ".$dato["procesadores"]."<br>".
        "Monitor: ".$dato["monitor"]."<br>".
        "Precio: ".$dato["precio"]."<br>";
        echo "<hr>";
    }
    $ordenadores[0][]=["marca"=>"LENOVO","procesadores" => "INTEL i5","precio" => 503];
    $ordenadores[1][]=["marca"=>"LENOVO","procesadores" => "INTEL i5","monitor" => "ASUS 23.8p","precio" => 740];

    var_export($ordenadores);
    echo "<br><br>";

    echo "PORTATILES<BR>";
    foreach($ordenadores[0] as $dato){
        echo "Marca: " . $dato["marca"]."<br>".
        "Procesador: ".$dato["procesadores"]."<br>".
        "Precio: ".$dato["precio"]."<br>";
        echo "<hr>";
    }
    echo"<br><br>";
    echo "SOBREMESA<BR>";
    foreach($ordenadores[1] as $dato){
        echo "Marca: " . $dato["marca"]."<br>".
        "Procesador: ".$dato["procesadores"]."<br>".
        "Monitor: ".$dato["monitor"]."<br>".
        "Precio: ".$dato["precio"]."<br>";
        echo "<hr>";
    }
    ?>
</body>
</html>