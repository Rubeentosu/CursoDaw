<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 2</title>
</head>

<body>
    <?php

    $host = "localhost";
    $user = "root";
    $pass = "";
    $name_db = "Campeonatos";
    $conexion = mysqli_connect($host, $user, $pass, $name_db);

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        session_start();
        if (isset($_POST["usuario"]) && isset($_POST["contrasena"])) {
            $usuario = htmlspecialchars($_POST["usuario"]);
            $contrasena = htmlspecialchars($_POST["contrasena"]);

            if ($usuario == "admin1" && $contrasena == "1234") {
                $_SESSION["admin1"] = $usuario;
            } else {
                echo "Usuario y contraseña no son válidos.";
                echo '<a href="Ej02_ActualDeleg.php">Volver al formulario</a><br>';
            }
        }
    } else {
    ?>

        <form action="Ej02_ActualDeleg.php" method="post">
            <fieldset>
                <legend>Iniciar Sesión</legend>
                <label for="usuario">Usuario</label>
                <input type="text" name="usuario" required>
                <br><br>

                <label for="contrasena">Contraseña</label>
                <input type="password" name="contrasena" required>
                <br><br>
            </fieldset>
            <button type="submit">Iniciar Sesión</button>
        </form>

    <?php
    }

    if (isset($_SESSION["admin1"])) {

        if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["id"]) && isset($_POST["Ndelegado"])) {
            $idJ = $_POST["id"];
            $nombre = $_POST["Ndelegado"];

            $query = "UPDATE juegos 
            SET delegado = '$nombre' 
            WHERE idJuego = '$idJ'";

            $resultado = mysqli_query($conexion, $query);

            header("Location: Ej02_Part2.php");
        }
    ?>
        <form action="Ej02_ActualDeleg.php" method="post">
            <fieldset>
                <legend>Cambiar Delegado</legend>
                <label for="idJuego">IdJuego</label>
                <input type="text" name="id" required>
                <br><br>

                <label for="delegado">Nombre Delegado</label>
                <input type="text" name="Ndelegado" required>
                <br><br>
            </fieldset>
            <button type="submit">Actualizar</button>
        </form>

        <br>

    <?php
    }
    ?>
</body>

</html>