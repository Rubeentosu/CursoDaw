<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio24</title>
    <style>
        body{
            color: rgb(53, 59, 106);
            background-color: beige;
            font-family: 'Courier New', Courier, monospace;
            font-size: 25px;
        }
    </style>
</head>
<body>
    <?php
    if(empty(htmlspecialchars(strtotime($_REQUEST["fechaC"])))){
        echo htmlspecialchars($_REQUEST["name"]). " tienes que introdcir una fecha valida <a href=\"formulario24.html\">Inicio</a>";
    }elseif(empty(htmlspecialchars($_REQUEST["hora"]))){
        echo htmlspecialchars($_REQUEST["name"])." selecciona al menos una hora <a href=\"formulario24.html\">Inicio</a>";
    }elseif(htmlspecialchars(strtotime($_REQUEST["fechaC"])) < strtotime("-1 day")){
        echo htmlspecialchars($_REQUEST["name"]). " no puedes pedir cita para antes del dia de hoy <a href=\"formulario24.html\">Inicio</a>";
        //<a href="">Inicio</a>
    }elseif(htmlspecialchars(strtotime($_REQUEST["fechaC"])) > strtotime("+1 month")){
        echo htmlspecialchars($_REQUEST["name"]). " no puedes pedir cita para dentro de mas de un mes <a href=\"formulario24.html\">Inicio</a>";
    }elseif(htmlspecialchars($_REQUEST["opcion1"])== "- Seleccionar -"){
        echo htmlspecialchars($_REQUEST["opcion1"])." no es una opcion permitida, cita no realizada <a href=\"formulario24.html\">Inicio</a>";
    }else  echo htmlspecialchars($_REQUEST["name"]). " con Nº seguridad social ".htmlspecialchars($_REQUEST["nSocial"]). " tu cita para ".htmlspecialchars($_REQUEST["opcion1"])." el dia ".date("d-m-Y",htmlspecialchars(strtotime($_REQUEST["fechaC"])))." y hora entre ".htmlspecialchars($_REQUEST["hora"])." ha sido realizada correctamente <a href=\"formulario24.html\">Inicio</a>";

    ?>
</body>
</html>