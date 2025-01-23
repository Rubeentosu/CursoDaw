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
        .formulario{
            text-align: center;
        }
    </style>
</head>
<body>
        
    <?php
    // Comprobamos si los datos del formulario de inicio de sesión han sido enviados
    if (isset($_POST["usuario"]) && isset($_POST["contrasena"])) {
        $usuario = $_POST["usuario"];
        $contrasena = $_POST["contrasena"];

        if ($usuario == "user1" && $contrasena == "1234") {
            // Si las credenciales son correctas, mostramos el formulario para subir la imagen
            echo "<form action=\"Ejercicio25.php\" class=\"formulario\" enctype=\"multipart/form-data\" method=\"post\">";
            echo "<fieldset>";
            echo "<legend>Usuario y contraseña válidos</legend>";
            echo "<label for=\"img\">Insertar imagen</label><br>";
            echo "<input type=\"file\" name=\"img\"><br><br>";
            echo "</fieldset>";
            echo "<button id=\"enviar\" type=\"submit\">Enviar</button>";
            echo "</form>";
            
        } else {
            // Si las credenciales no son correctas
            echo "Usuario y contraseña no son válidos.";
        }
    }
    if(isset($_FILES["img"]["name"])){
        // Información del archivo
        $nombreFich = $_FILES["img"]["name"];
        $tamanoFich = $_FILES["img"]["size"];
        $tipoFich = $_FILES["img"]["type"];
        $nombreTemporalFich = $_FILES["img"]["tmp_name"];

        // Ruta de almacenamiento
        $ruta = "image_up/";

        // Validamos el tipo de archivo
        if ($tipoFich != "image/jpg" && $tipoFich != "image/png" && $tipoFich != "image/jpeg") {
            echo "Error. Solo admite imágenes JPG o PNG.";
        } elseif ($tamanoFich > 2 * 1024 * 1024) {
            // Validamos el tamaño del archivo (máximo 2MB)
            echo "Error. La imagen pesa más de 2MB.";
        } else {
            // Definimos la ruta de destino
            $rutaDestino = $ruta . basename($nombreFich);

            // Movemos el archivo a la carpeta de destino
            if (move_uploaded_file($nombreTemporalFich, $rutaDestino)) {
                echo "Archivo subido con éxito: " . $nombreFich . "<br><br>";
                echo "<img src=\"$rutaDestino\" alt=\"Imagen subida\">";
            } else {
                echo "Error al subir el archivo.";
            }
        }
    }
    ?>

</body>
</html>
