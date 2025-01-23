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
    $animal = [
        "ave" => ["paloma", "angila", "periquito"],
        "reptil" => ["boa", "culebra", "lagarto", "camaleon"]

    ];
    $animal2 = [
        "ave" => ["paloma", "angila", "periquito"],
        "reptil" => ["boa", "culebra", "lagarto", "camaleon"],
        "pez" => [
            "mamifero" => ["delfin", "ballena"],
            "otro" => ["boqueron", "tiburon", "atun"]
        ]

    ];
    var_export($animal);
    echo "<br><br>";
    var_export($animal2);
    echo "<br><br>";

    echo "Contar el numero de elemetos de animal y animal2: <br>";
    //sizeof hace los mismo
    echo count($animal);
    echo "<br><br>";
    echo count($animal2);
    echo "<br><br>";

    //Contar todo lo que hay en cada array
    echo count($animal, COUNT_RECURSIVE);
    echo "<br><br>";
    echo count($animal2, COUNT_RECURSIVE);
    echo "<br><br>";

    echo "El numero de elemntos de array animal:<br>";
    
    foreach($animal2 as $dato){
        echo count($dato)."<br>"; 
    }
    ?>
</body>

</html>