<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            color: rgb(46, 136, 38);
            background-color: beige;
            font-family: 'Courier New', Courier, monospace;
            text-align: center;
        }
    </style>
</head>
<body>
    <?php
    $nombre = $_REQUEST["name"];
    echo "<h2>¡Hola, $nombre!</h2>";
    $lenguajeP = $_REQUEST["lenguaje"];
    echo "Tu lenguaje elegido es: $lenguajeP <br>";
    $opciones = $_POST["opcion1"];
    echo "Tu nivel de lenguaje es: $opciones <br>";
    if($lenguajeP == "PHP"){
        echo "PHP es un lenguaje para crear páginas web dinámicas.<br>";
    }elseif($lenguajeP == "JavaScript"){
        echo "JavaScript es un lenguaje que hace las páginas web interactivas.<br>";
    }elseif($lenguajeP == "Python"){
        echo "Python es un lenguaje fácil de aprender y muy versátil.<br>";
    }elseif($lenguajeP == "Java"){
        echo "Java es un lenguaje que se puede ejecutar en cualquier plataforma.<br>";
    }
    if(isset($_REQUEST["noticias"])){
        echo "Vas a recibir muchas noticias";
    }    
    
    ?>
    
</body>
</html>