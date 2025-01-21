<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página Bienvenida</title>
    <style>
        body{
            color: rgb(53, 59, 106);
            background-color: beige;
            font-family: 'Courier New', Courier, monospace;
            font-size: 25px;
        }
        .formulario{
            text-align: center;
        }
    </style>
</head>
<body>
    <?php
        session_start();
        echo "Bienvenido ".$_SESSION["user"];
    ?>
    <form action="ej26_bienvenida.php" method="post">
        <label for="opcion"> Elige a qué página ir
            <br>
            <input type="radio" name="opcion" id="formulario" value="formulario"> 
            <label for="formulario">Formulario</label><br>
            <input type="radio" name="opcion" id="informacion" value="informacion"> 
            <label for="informacion">Información</label><br>
        </label> 
        <button id="enviar" type="submit">Enviar</button>
    </form>
    <a href="ej26_cerrar_sesion.php"><button>Cerrar Sesion</button></a>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $opciones = $_POST["opcion"];
        if ($opciones == "formulario") {
            header("Location: ej26_datos_personales.php");
            exit();
        } elseif ($opciones == "informacion") {
            header("Location: ej26_pag_adicional.php");
            exit();
        }
    }
    ?>

</body>
</html>