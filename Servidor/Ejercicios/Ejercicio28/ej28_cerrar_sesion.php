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
        session_unset();
        session_destroy();

        setcookie("nombre_usu"," ",time(),"/");

        header("Location: ej28_form_inicial.html");
    ?>
    
</body>
</html>