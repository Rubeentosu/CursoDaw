<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario</title>
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
<?php
        session_start();
        echo "Hola ".$_SESSION["user"]." rellena el siguiente formulario";
    ?>
    <form action="ej26_datos_personales.php" method="post">
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" required>
    <br><br>

    <label for="apellidos">Apellidos:</label>
    <input type="text" id="apellidos" name="apellidos" required>
    <br><br>

    <label for="edad">Edad:</label>
    <input type="number" id="edad" name="edad" required>
    <br><br>

    <label for="email">Correo Electrónico:</label>
    <input type="email" id="email" name="email" required>
    <br><br>

    <label for="provincia">Provincia:</label>
    <input type="text" id="provincia" name="provincia" required>
    <br><br>

    <button type="submit">Enviar</button>
</form>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nombreUser = htmlspecialchars($_POST["nombre"]);
        $apellidosUser = htmlspecialchars($_POST["apellidos"]);
        $edadUser = htmlspecialchars($_POST["edad"]);
        $emailUser = htmlspecialchars($_POST["email"]);
        $provinciaUser = htmlspecialchars($_POST["provincia"]);

        $_SESSION["nombre"] = $nombreUser;
        $_SESSION["apellidos"] = $apellidosUser;
        $_SESSION["edad"] = $edadUser;
        $_SESSION["email"] = $emailUser;
        $_SESSION["provincia"] = $provinciaUser;

        header("Location: ej26_bienvenida.php");
    }
    ?>
</body>
</html>