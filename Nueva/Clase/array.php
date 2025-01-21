<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
    //ARRAY ASOCIATIVO AL CUAL LE PONGO YO SU POSICION EN MEMORIA
    $arrayop = array("so1"=> "Windows 10", "so2" => "Ubuntu 22.04", "so3" => "Windows Server 2019", "so4" => "Ubunto Server LTS");
    $vectormix= array("nombre" => "Pedro", "edad" => 27, 3 => 0.5);

    //ARRAY INDEXADO EL CUAL LE PROPORCIONA A CADA UNO UN INDEX
    $vector1 = array("lunes","martes","miercoles","jueves","viernes","sabado","domingo");

    echo "La posicion 5 es: ".$vector1[4];
    echo "<br>";
    echo "El alumno ". $vectormix["nombre"] ." tiene ". $vectormix["edad"] ." años";

    echo "<br>";

    //Muestra el contenido, tipo y tamaño del array.
    var_dump($vectormix);
    ?>
</body>
</html>