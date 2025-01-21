<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Informacion</title>
    <style>
        body {
            color: rgb(53, 59, 106);
            background-color: beige;
            font-family: 'Courier New', Courier, monospace;
            font-size: 25px;
        }
    </style>
</head>
<body>
    <?php
        session_start();

        if(isset($_SESSION["nombre"]) && isset($_SESSION["apellidos"]) && isset($_SESSION["edad"]) && isset($_SESSION["email"]) && isset($_SESSION["provincia"])){
            echo "Bienvenido ".$_SESSION["user"]." tus datos son los siguientes:<br>";
            echo "Nombre = ".$_SESSION["nombre"]."<br>";
            echo "Apellidos = ".$_SESSION["apellidos"]."<br>";
            echo "Edad = ".$_SESSION["edad"]."<br>";
            echo "Email = ".$_SESSION["email"]."<br>";
            echo "Provincia = ".$_SESSION["provincia"]."<br>";
        }else echo $_SESSION["user"]." tus datos todavia no han sido enviados";
    ?>
    <form action="ej26_bienvenida.php" method="post">
        <button type="submit">Volver</button>
    </form>
</body>
</html>