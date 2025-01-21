<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 28</title>
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
        if(isset($_SESSION["user1"]) && isset($_SESSION["email1"])) {

            
            if(isset($_COOKIE["nombre_usu"])) {
                $nombre = $_SESSION["user1"]; 
            } else {
                $nombre = ""; 
            }

            if(isset($_COOKIE["email_usu"])) {
                $correo = $_SESSION["email1"]; 
            } else {
                $correo = "No hay correo definido"; 
            }

            
            if(isset($_COOKIE["nombre_usu"])) {
                $color = $_SESSION["color1"];  
            } else {
                $color = "No hay color definido";  
            }

            
            echo "<fieldset style=\"background-color: $color;\">";
            echo "<h2>¡HOLA, " . $nombre . " !</h2>";
            echo "<br><br>";
            echo "Tu correo es: " . $correo;
            echo "</fieldset>";
        } else {
            
            echo "No hay datos que mostrar";
        }
    ?>



<br>
<a href="ej28_cerrar_sesion.php"><button>Cerrar Sesión</button></a>

</body>
</html>