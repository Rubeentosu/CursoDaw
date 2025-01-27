<?php
session_start();

// Inicializamos los productos disponibles
$productosDisponibles = [
    "Camiseta" => 25,
    "Pantalón" => 23,
    "Zapatos" => 64
];

// Inicializamos el carrito si no existe
if (!isset($_SESSION["carrito"])) {
    $_SESSION["carrito"] = [];
}

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["producto"]) && isset($_POST["cantidad"])) {
    $producto = $_POST["producto"];
    $cantidad = (int)$_POST["cantidad"];

    // Verificamos si la cantidad es válida
    if ($cantidad > 0 && array_key_exists($producto, $productosDisponibles)) {
        // Agregamos el producto al carrito
        if (isset($_SESSION["carrito"][$producto])) {
            $_SESSION["carrito"][$producto] += $cantidad;
        } else {
            $_SESSION["carrito"][$producto] = $cantidad;
        }
    }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Compra</title>
</head>
<body>
    <h1>Seleccione productos para el carrito</h1>
    <form method="post" action="">
        <label for="producto">Producto:</label>
        <select name="producto" id="producto" required>
            <?php 
            foreach ($productosDisponibles as $producto => $precio) { 
            ?>
                <option value="<?php echo $producto; ?>"><?php echo $producto; ?> - €<?php echo $precio; ?></option>
            <?php 
            } 
            ?>
        </select>
        <label for="cantidad">Cantidad:</label>
        <input type="number" name="cantidad" id="cantidad" min="1" required>
        <button type="submit">Agregar al carrito</button>
    </form>

    <a href="resultado.php">Ver carrito</a>
</body>
</html>
