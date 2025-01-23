<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicioo28</title>
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

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
        $nombreUsuario = htmlspecialchars($_POST["nombre"]);
        $email = htmlspecialchars($_POST["correo"]);
        $color = htmlspecialchars($_POST["colores"]);

        $_SESSION["user1"] = $nombreUsuario;
        $_SESSION["email1"] = $email;
        $_SESSION["color1"] = $color;
        setcookie("nombre_usu",$_SESSION["user1"],time() + 3600 * 24,"/");

        header("Location: ej28_bienvenida.php");
        exit(); 
    }else header("Location: ej28_form_inicial.html");
    
    ?>
</body>
</html>