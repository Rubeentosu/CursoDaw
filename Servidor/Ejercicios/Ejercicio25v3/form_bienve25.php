<?php
 session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio25</title>
    <style>
        
        body{
            color: rgb(53, 59, 106);
            background-color: beige;
            font-family: 'Courier New', Courier, monospace;
            font-size: 25px;
        }
        #enviar{
            background-color: rgb(0, 0, 0);
            color: beige;
            height: 40px;
        }
        .formulario{
            text-align: center;
        }
    </style>
</head>
<body>
    <form action="Ejercicio25v2.php" method="post" class="formulario" enctype="multipart/form-data">
        <p>Bienvenido <?php echo  $_SESSION["user"]; ?></p>
       <fieldset>
        <legend>Subir imagen</legend>
        <label for="img">Insertar Imagen</label>
        <input type="file" name="img" required>
        <br><br>
    </fieldset>
        <button id="enviar" type="submit">Enviar</button>
    </form>
</body>
</html>