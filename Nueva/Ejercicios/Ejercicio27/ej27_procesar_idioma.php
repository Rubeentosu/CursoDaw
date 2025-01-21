<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Procesar idioma</title>
</head>
<body>
    <?php
    $opciones = $_POST["idioma"];
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        setcookie("idioma_preferido",$opciones,time() + 3600 * 24 *30,"/");
        header("Location: ej27_web_idioma.php");
    }
        
    ?>
</body>
</html>