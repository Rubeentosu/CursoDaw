<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carrito compra</title>
</head>
<body>
    <h2>Formulario de Compra</h2>
    <form action="formulario.php" method="post">
       <fieldset>
        <legend>Ruben Torrico Suarez</legend>
        <label for="producto"> ¿Cual es tu lenguaje de programacion favorito?
               <br>
                <input type="radio" name="producto" id="PHP" value="camiseta"> <label for="camiseta">Camiseta -25€</label><br>
                <input type="radio" name="producto" id="javascript" value="pantalon" required> <label for="pantalon">Pantalon - 23€</label><br>
                <input type="radio" name="producto" id="python" value="zapatos" required> <label for="zapatos">Zapatos - 64€</label><br>
            </label> 
        <br><br>
        <label for="cantidad">Cantidad</label>
        <input type="number" name="cantidad" required>
        <br><br>
    </fieldset>
        <button type="submit">Agregar Carrito</button>
    </form>
    <a href="resultado.php">Ver carrito</a>
    <?php
    session_start();
    if ($_SERVER["REQUEST_METHOD"] == "POST" && !isset($_SESSION["carrito"])) {
        $_SESSION["carrito"] = [];
        $productosdisponibles = [];
        $productos = $_POST["producto"];
        $cantidadP = $_POST["cantidad"];

        $productosdisponibles = [$productos][$cantidadP];
        $_SESSION["carrito"][$productos][$cantidadP] = $productosdisponibles;
    }else if($_SESSION["carrito"] == []){
        exit();
        echo "No hay productos en el carrito";
    }
    
    ?>
</body>
</html>