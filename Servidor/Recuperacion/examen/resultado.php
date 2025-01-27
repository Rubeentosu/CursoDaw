<?php
session_start();

// Función para calcular el total con IVA
function calcularTotalConImpuestos($carrito, $productosDisponibles) {
    $total = 0;
    foreach ($carrito as $producto => $cantidad) {
        $subtotal = $productosDisponibles[$producto] * $cantidad;
        $total += $subtotal;
    }
    return $total * 1.21; // Aplicamos el 21% de IVA
}

// Verificamos si se ha solicitado vaciar el carrito
if (isset($_POST["vaciar"])) {
    $_SESSION["carrito"] = [];
}

$productosDisponibles = [
    "Camiseta" => 25,
    "Pantalón" => 23,
    "Zapatos" => 64
];

if (isset($_SESSION["carrito"])) {
    $carrito = $_SESSION["carrito"];
} else {
    $carrito = [];
}

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carrito de Compras</title>
</head>
<body>
    <h1>Carrito de Compras</h1>
    <?php if (!empty($carrito)) { ?>
        <table border="1">
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
            <tbody>
                <?php 
                foreach ($carrito as $producto => $cantidad) { 
                ?>
                    <tr>
                        <td><?php echo $producto; ?></td>
                        <td>€<?php echo $productosDisponibles[$producto]; ?></td>
                        <td><?php echo $cantidad; ?></td>
                        <td>€<?php echo $productosDisponibles[$producto] * $cantidad; ?></td>
                    </tr>
                <?php 
                } 
                ?>
            </tbody>
        </table>
        <p><strong>Total con IVA (21%):</strong> €<?php echo number_format(calcularTotalConImpuestos($carrito, $productosDisponibles), 2); ?></p>
        <form method="post" action="">
            <button type="submit" name="vaciar">Vaciar el carrito</button>
        </form>
    <?php } else { ?>
        <p>No hay productos en el carrito.</p>
    <?php } ?>
    <a href="formulario.php">Volver al formulario</a>
</body>
</html>
