<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    session_start();
    echo var_export($_SESSION["carrito"]);

    ?>
    <table>
        <tr><td>Producto</td><td>Precio Unitario</td><td>Cantidad</td><td>SubTotal</td></tr>

    </table>
</body>
</html>