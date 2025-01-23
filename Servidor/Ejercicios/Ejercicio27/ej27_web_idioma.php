<!DOCTYPE html>
<html lang="<?php
    if(isset($_COOKIE["idioma_preferido"])){
        $idioma = $_COOKIE["idioma_preferido"];
    }else{
        $idioma = "es";
    }
    echo $idioma
?>">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        
            if($idioma == "es"){
                echo "Hola, bienvenido a nuestra web <br> Pagina en español";
            }elseif($idioma = "en"){
                echo "Hello, welcome to our website <br> Page in English";
            }
    ?>
    <form action="ej27_idioma.html">
        <button type="submit">Volver</button>
    </form>
</body>
</html>