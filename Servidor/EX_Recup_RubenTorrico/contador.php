<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 1 php</title>
</head>
<body>
    <?php 
    //comprobamos que existe la cookie
    if(isset($_COOKIE["visitas"])){
        //si existe le sumamos 1 al valor
        $num = $_COOKIE["visitas"] + 1;
        setcookie("visitas",$num,time() + 3600 * 24 * 360,"/");
        echo "<h1>Contador de visitas</h1>";
        echo "<h2>Rubén Torrico Suárez</h2>";
        echo "<p>Has visitado esta página $num veces</p>";

    }else{
        //si no existe la cookie la creamos con valor 1
        setcookie("visitas",1,time() + 3600 * 24 * 360,"/");
        echo "<h1>Contador de visitas</h1>";
        echo "<h2>Rubén Torrico Suárez</h2>";
        echo "<p>Bienvenido/a, esta es su primera visita</p>";
    }
    ?>
    <a href="form_contador.html">Volver a la pagina inicial</a>
</body>
</html>