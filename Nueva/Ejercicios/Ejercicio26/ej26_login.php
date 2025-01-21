<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio26</title>
    <style>
        body {
            color: rgb(53, 59, 106);
            background-color: beige;
            font-family: 'Courier New', Courier, monospace;
            font-size: 25px;
        }

        .formulario {
            text-align: center;
        }
    </style>
</head>

<body>
    <form action="ej26_login.php" method="post" class="formulario" enctype="multipart/form-data">
        <fieldset>
            <legend>Iniciar Sesion</legend>
            <label for="usuario">Usuario</label>
            <input type="text" name="usuario" required>
            <br><br>

            <label for="contrasena">Contraseña</label>
            <input type="password" name="contrasena" required>
            <br><br>
        </fieldset>
        <button id="enviar" type="submit">Enviar</button>
    </form>
    <?php
    session_start();
    // Comprobamos si los datos del formulario de inicio de sesión han sido enviados
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        $usuario = htmlspecialchars($_POST["usuario"]);
        $contrasena = htmlspecialchars($_POST["contrasena"]);

        if ($usuario == "user1" && $contrasena == "1234") {
            $_SESSION["user"] = $usuario;
            header("Location: ej26_bienvenida.php");
        } else {
            echo "Usuario y contraseña no son válidos.";
        }
    }
    ?>

</body>

</html>