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
    session_start();
    // Comprobamos si los datos del formulario de inicio de sesión han sido enviados
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if(!isset($_FILES["img"]["name"])){
            $usuario = $_POST["usuario"];
            $contrasena = $_POST["contrasena"];

            if ($usuario == "user1" && $contrasena == "1234") {
                $_SESSION["user"] = $usuario;
            header("Location: form_bienve25.php");
            } else {
            echo "Usuario y contraseña no son válidos.";
            }
        }else{
            // Información del archivo
            $nombreFich = $_FILES["img"]["name"];
            $tamanoFich = $_FILES["img"]["size"];
            $tipoFich = $_FILES["img"]["type"];
            $nombreTemporalFich = $_FILES["img"]["tmp_name"];

            //$tiposImagen = substr($tipoFich,0,6);
            // Ruta de almacenamiento
            $ruta = "image_up/";

            // Validamos el tipo de archivo
            //if ($tiposImagen != "image/")
            if (!exif_imagetype($nombreTemporalFich)) {
            echo "Error. Solo admite imágenes.";
            } elseif ($tamanoFich > 2 * 1024 * 1024) {
            // Validamos el tamaño del archivo (máximo 2MB)
            echo "Error. La imagen pesa más de 2MB.";
            } else {
            // Definimos la ruta de destino
            $rutaDestino = $ruta . basename($nombreFich);

            // Movemos el archivo a la carpeta de destino
            if (move_uploaded_file($nombreTemporalFich, $rutaDestino)) {
                echo $_SESSION["user"]." tu archivo " . $nombreFich . " ha sido subido con éxito <br><br>";
                echo "<img src=\"$rutaDestino\" alt=\"Imagen subida\">";
            } else {
                echo "Error al subir el archivo.";
            }
        }
        }
    }
    ?>

</body>
</html>
