<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio09</title>
</head>

<body>
    <h1>Arrays</h1>
    <?php
    $datosPersonales = [
        ["nombre" => "Maria", "apellido" => "Hernandez", "edad" => 23, "direccion" => ["localidad" => "Nerja", "provincia" => "Malaga"]],
        ["nombre" => "Elena", "apellido" => "Gomez", "edad" => 17, "direccion" => ["localidad" => "Motril", "provincia" => "Granada"]],
        ["nombre" => "Pedro", "apellido" => "Ruiz", "edad" => 17, "direccion" => ["localidad" => "Torrox", "provincia" => "Malaga"]]
    ];

    var_export($datosPersonales);
    echo "<br><br>";
    
    echo "Nombre: " . $datosPersonales[1]["nombre"].
    "<br> Edad: ".$datosPersonales[1]["edad"];
    echo "<br><br>";

    foreach($datosPersonales as $dato){
        echo "Nombre: " . $dato["nombre"]." ".$dato["apellido"].
        "<br> Edad: ".$dato["edad"].
        "<br> Localidad: ".$dato["direccion"]["localidad"].
        "<br> Localidad: ".$dato["direccion"]["provincia"];

        echo "<hr>";  
    }
    echo "<br><br>";
    echo "<h2>Menores de edad</h2>";
    foreach($datosPersonales as $dato){
        if($dato["edad"]<18){
            echo "Nombre: " . $dato["nombre"]." ".$dato["apellido"].
        "<br> Edad: ".$dato["edad"].
        "<br> Localidad: ".$dato["direccion"]["localidad"].
        "<br> Localidad: ".$dato["direccion"]["provincia"];

        echo "<hr>";  
        }
    }
    ?>
</body>

</html>