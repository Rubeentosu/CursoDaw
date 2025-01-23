<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $nombre = "Julia";
    $contrasenia = "aa11";
    switch(true){
        case ($nombre == "Julia" && $contrasenia == "aa11"):
            echo "Usuario autorizado. Hola ".$nombre;
            break;
        case ($nombre == "Laura" && $contrasenia == "aa12"):
            echo "Usuario autorizado. Hola ".$nombre;
            break;
        case ($nombre == "Pedro" && $contrasenia == "aa13"):
            echo "Usuario autorizado. Hola ".$nombre;
            break;
        case ($nombre == "Carlos" && $contrasenia == "aa14"):
            echo "Usuario autorizado. Hola ".$nombre;
            break;
        default: echo "Usuario no autorizado";
    }

    ?>
</body>
</html>