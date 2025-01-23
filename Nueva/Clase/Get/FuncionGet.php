<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Funcion Get</title>
</head>

<body>
    <h1>GET</h1>
    <?php
    //get es una array asociativo
    if(empty($_GET["nombre"]) || empty($_GET["apellido"]) ){
        echo "Falta parametros";
    }else echo "Hola ".$_GET["nombre"]." ".$_GET["apellido"];

    //http://localhost:3000/Clase/Get/FuncionGet.php?nombre=Pedro&apellido=gomez -> bien
    //http://localhost:3000/Clase/Get/FuncionGet.php?nombre=Pedro -> faltan parametros
    ?>
</body>

</html>